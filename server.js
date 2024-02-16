exports.server = () => {
	const {spawn} = require("child_process")
    const express = require("express")
    const app = express()

	app.get("/", (request, response) => {
		response.writeHead(200, {
			"Content-Type": "application/json",
		})
		response.end(JSON.stringify({ 
			statusText: "Root Endpoint of Express-App-Test-2" 
		}))
  	})

      app.get("/py/calc/:num_1/:num_2/:op", (request, response) => {
		let dataToSend = null

        let num_1 = request.params["num_1"] || 25
        let num_2 = request.params["num_2"] || 35
        let op = request.params["op"] || "add"

		const python = spawn(
            "python/venv/Scripts/python.exe", 
            [
                "python/main.py", 
                "--num-1", 
                `${num_1}`,
                "--num-2", 
                `${num_2}`,
                "--op", 
                `${op}`
            ]
        )

		python.stdout.on("data", (data) => {
            // console.log("Pipe data from python script ...")
            dataToSend = data.toString()
        })

		python.on("close", (code) => {
            // console.log(`Child process close all stdio with code ${code}`)
            response.end(
                JSON.stringify({
                    "result" : dataToSend.trim(),
                })
            )
        })

	})

	app.get("/py/calc", (request, response) => {
		let dataToSend = null

        let num_1 = request.query.num_1 || 25
        let num_2 = request.query.num_2 || 35
        let op = request.query.op || "add"

		const python = spawn(
            "python/venv/Scripts/python.exe", 
            [
                "python/main.py", 
                "--num-1", 
                `${num_1}`,
                "--num-2", 
                `${num_2}`,
                "--op", 
                `${op}`
            ]
        )

		python.stdout.on("data", (data) => {
            // console.log("Pipe data from python script ...")
            dataToSend = data.toString()
        })

		python.on("close", (code) => {
            // console.log(`Child process close all stdio with code ${code}`)
            response.end(
                JSON.stringify({
                    "result" : dataToSend.trim(),
                })
            )
        })

	})

    return app
}