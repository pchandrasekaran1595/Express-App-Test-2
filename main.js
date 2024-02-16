main = () => {
	let host = "localhost"
	let port = process.env.PORT || 9090

  	let cmd_line_args = process.argv.slice(2)

  	if (cmd_line_args.includes("--host")) {
    	host = cmd_line_args[cmd_line_args.indexOf("--host") + 1]
  	}

  	if (cmd_line_args.includes("-h")) {
    	host = cmd_line_args[cmd_line_args.indexOf("-h") + 1]
  	}

  	if (cmd_line_args.includes("--port")) {
    	port = cmd_line_args[cmd_line_args.indexOf("--port") + 1]
  	}

  	if (cmd_line_args.includes("-p")) {
    	port = cmd_line_args[cmd_line_args.indexOf("-p") + 1]
 	}

    require("./server").server().listen(port, host, () => {
		console.log("\n" + "*".repeat(50) + "\n")
    	console.log(`Server running at http://${host}:${port}`)
		console.log("\n" + "*".repeat(50) + "\n")
  	})
}

main()