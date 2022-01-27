package main

import (
	"dokumentasi-in/back-end/database"
	"dokumentasi-in/back-end/routes"
	"net/http"

	"github.com/go-playground/validator/v10"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

type CustomValidator struct {
	validator *validator.Validate
}

//----------
// Validator
//----------
func (cv *CustomValidator) Validate(i interface{}) error {
	err := cv.validator.Struct(i)
	if err != nil {
		// Optionally, you could return the error to give each route more control over the status code
		return echo.NewHTTPError(http.StatusBadRequest, err.Error())
	}
	return nil
}

//----------
// Handlers
//----------

func main() {

	database.Connect()

	e := echo.New()
	e.Validator = &CustomValidator{validator: validator.New()}

	//Middleware
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())
	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins:     []string{"*"},
		AllowMethods:     []string{echo.GET, echo.PUT, echo.POST, echo.DELETE},
		AllowCredentials: true, //true untuk simpan cookie di browser
	}))

	//Routes
	routes.Setup(e)

	//Start Server
	e.Logger.Fatal(e.Start(":1234"))
}
