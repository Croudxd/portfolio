package main

import (
	"github.com/gin-gonic/gin"
)

func main() {

	router := gin.Default()

	router.Static("/assets", "./")

	router.GET("/", func(c *gin.Context) {
		c.File("./main.html")
	})

	router.GET("/about", func(c *gin.Context) {
		c.File("./about/about.html")
	})

	router.GET("/projects", func(c *gin.Context) {
		c.File("./projects/projects.html")
	})
	//Connect to esp32...

	// //RUST SERVER ENDPOINTS:
	// router.GET("/", getHome)
	// router.GET("/about", getAbout)
	// router.GET("/projects", getProjects)

	router.Run(":8083")
}

// func getHome()
// {
// 	return 0
// }

// func getAbout()
// {

// }

// func getProjects()
// {

// }
