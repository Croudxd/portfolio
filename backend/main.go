package main

import (
	"github.com/gin-gonic/gin"
)

func main() {

	router := gin.Default()

	// Serve the React build folder
	router.Static("/", "./dist")

	// SPA fallback: always serve index.html for unknown routes
	router.NoRoute(func(c *gin.Context) {
		c.File("./dist/index.html")
	})

	router.Run(":8083")
}

