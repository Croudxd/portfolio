package main

import (
	"github.com/gin-gonic/gin"
)

func main() {

	router := gin.Default()

	router.Static("/assets", "./")

	router.GET("/", func(c *gin.Context) {
		c.File("./pages/main/main.html")
	})

	router.GET("/about", func(c *gin.Context) {
		c.File("./pages/about/about.html")
	})

	router.GET("/projects", func(c *gin.Context) {
		c.File(".pages/projects/projects.html")
	})

	router.Run(":8083")
}
