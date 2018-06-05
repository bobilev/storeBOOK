package dbwork

import (
	"github.com/bobilev/storeBOOK/dbtypes"
	"fmt"
	"strings"
	"github.com/lib/pq"
)

func SelectSteps(storeid string) []dbtypes.Step{
	db := dbConnect()
	defer db.Close()

	fmt.Println("DB ->",storeid)
	res, err := db.Query("SELECT id,storeid,stepid,text,media,answer,typedoc,accesskey FROM steps WHERE storeid=$1 ORDER BY id ASC",storeid)
	checkErr(err)
	var Lists []dbtypes.Step
	for res.Next() {
		var id int
		var storeid int
		var stepid string
		var text string
		var media int
		var answer []string
		var typedoc string
		var accesskey string
		//var Answer dbtypes.Answer

		var Step dbtypes.Step
		err = res.Scan(&id,&storeid,&stepid,&text,&media,pq.Array(&answer),&typedoc,&accesskey)
		checkErr(err)

		Step.Id = id
		Step.StoreId = storeid
		Step.StepID = stepid
		Step.Text = text
		Step.Media = media

		Step.TypeDoc = typedoc
		Step.AccessKey = accesskey

		for _,val := range answer {
			array := strings.Split(val,"|")
			ans := dbtypes.Answer{array[0],array[1]}
			Step.Answers = append(Step.Answers,ans)
		}
		Lists = append(Lists,Step)
		fmt.Println("step comlite: ",answer)
	}
	return Lists
}
