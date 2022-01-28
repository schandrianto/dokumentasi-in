package models

import (
	"dokumentasi-in/database"
)

type User struct {
	Id       uint   `gorm:"primaryKey;autoIncrement;not null"`
	Username string `json:"username" form:"username" validate:"required" gorm:"unique"`
	Password string `json:"password" form:"password" validate:"required"`
	Fullname string `json:"fullname" form:"fullname" validate:"required"`
}

//Error Handling CreateUser
func (user *User) CreateUser() error {
	err := database.DB.Create(user).Error
	if err != nil {
		return err
	}
	return nil
}

//Error Handing UpdateUser
func (user *User) UpdateUser(username string) error {
	err := database.DB.Model(&User{}).Where("username = ?", username).Updates(user).Error
	if err != nil {
		return err
	}

	return nil
}

//Error Handling DeleteUser
func (user *User) DeleteUser() error {
	err := database.DB.Delete(user).Error
	if err != nil {
		return err
	}
	return nil
}

//Error Handling GetUserByUsername
func GetUserByUsername(username string) (User, error) {
	var user User
	result := database.DB.Where("username = ?", username).First(&user)
	return user, result.Error
}

//Error Handling SearchUser
func SearchUser(keyword string) ([]User, error) {
	var user []User
	result := database.DB.Where("username LIKE ? OR fullname LIKE ?", "%"+keyword+"%", "%"+keyword+"%").Find(&user)
	return user, result.Error
}
