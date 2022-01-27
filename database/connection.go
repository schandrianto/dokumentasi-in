package database

import (
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect() {
	host := "localhost"
	port := "3306"
	dbname := "dokumentasiin"
	username := "root"
	password := "root"

	dbInfo := username + ":" + password + "@tcp(" + host + ":" + port + ")/" + dbname + "?charset=utf8&parseTime=true&loc=Local"
	var err error
	DB, err = gorm.Open(mysql.Open(dbInfo), &gorm.Config{SkipDefaultTransaction: true})
	if err != nil {
		panic("Cannot Connect Database!!")
	}

	DB.AutoMigrate()
}
