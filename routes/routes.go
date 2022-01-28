package routes

import (
	"dokumentasi-in/controllers"

	"github.com/labstack/echo/v4"
)

func Setup(e *echo.Echo) {
	e.POST("user/create_user", controllers.CreateUser)
	e.POST("user/login", controllers.Login)
	e.POST("user/logout", controllers.Logout)
}
