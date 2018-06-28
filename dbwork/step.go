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
		var answer []string

		var Step dbtypes.Step
		err = res.Scan(&Step.Id,&Step.StoreId,&Step.StepId,&Step.Text,&Step.Media,pq.Array(&answer),&Step.TypeDoc,&Step.AccessKey)
		checkErr(err)

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
