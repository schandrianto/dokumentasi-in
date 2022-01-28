package controllers

import (
	"dokumentasi-in/database"
	"dokumentasi-in/models"
	"fmt"
	"net/http"
	"strconv"
	"time"

	"github.com/golang-jwt/jwt"
	"github.com/labstack/echo/v4"
)

const SecretKey = "secret"

func CreateUser(c echo.Context) error {
	user := new(models.User)
	//fmt.Println("User: ", user)
	c.Bind(user)
	//fmt.Println("User2: ", *user)

	//Save Data
	err := database.DB.Create(user).Error

	response := new(models.Response)
	if err != nil { //panggil method CreateUser
		response.Message = "Gagal create data user - " + err.Error()
		response.Status = "failed"
		return c.JSON(http.StatusInternalServerError, response)
	} else {
		response.Message = "Sukses create data user"
		response.Status = "success"
		response.Data = *user
	}
	return c.JSON(http.StatusOK, response)
}

func Login(c echo.Context) error {
	data := echo.Map{}
	var user models.User
	fmt.Println(user)
	err := c.Bind(&data)
	if err != nil {
		return err
	}
	fmt.Println("Username: ", data["username"])
	fmt.Println("Password: ", data["password"])
	result := database.DB.Where("username = ?", data["username"]).First(&user) //ambil user by username
	response := new(models.Response)

	// cek data ada atau kosong
	if result.Error != nil {
		response.Message = "User tidak ditemukan"
		response.Status = "failed"
		return c.JSON(http.StatusNotFound, response)
	}

	//cek password sudah sesuai atau belum
	if user.Password != data["password"] {
		response.Message = "Password salah"
		response.Status = "failed"
		return c.JSON(http.StatusBadRequest, response)
	}

	//JWT
	claims := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.StandardClaims{
		Issuer:    strconv.Itoa(int(user.Id)),            //convert int to string
		ExpiresAt: time.Now().Add(time.Hour * 24).Unix(), //1 hari
	})

	token, err := claims.SignedString([]byte(SecretKey))

	if err != nil {
		response.Message = "Tidak bisa login"
		response.Status = "failed"
		return c.JSON(http.StatusInternalServerError, response)
	} else {
		response.Message = "Login sukses"
		response.Status = "success"
		response.Data = user
	}

	//Set Cookie
	cookie := new(http.Cookie)
	cookie.Name = "jwt"
	cookie.Value = token
	cookie.Expires = time.Now().Add(time.Hour * 24) // 1 day
	cookie.HttpOnly = true
	c.SetCookie(cookie)

	return c.JSON(http.StatusOK, response)
}

func Logout(c echo.Context) error {
	//Hapus Cookie
	cookie := new(http.Cookie)
	cookie.Name = "jwt"
	cookie.Value = ""
	cookie.Expires = time.Now().Add(-time.Hour)
	cookie.HttpOnly = true
	c.SetCookie(cookie)

	response := new(models.Response)
	response.Message = "Logout sukses"
	response.Status = "success"

	return c.JSON(http.StatusOK, response)
}
