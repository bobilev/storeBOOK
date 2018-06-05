package dbwork

func SelectInfo() {
	db := dbConnect()
	defer db.Close()
	
}