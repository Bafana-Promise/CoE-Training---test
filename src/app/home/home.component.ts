import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name: string = 'John';
  users: any[] = [
    {
      name: 'One', surname: 'one', email: 'testone@gmail.com', town: 'Randburg',
      suburb: "Ferndale", street: "7 Coetsee Street", code: "2920"},
    {
        name: 'Two', surname: 'two', email: 'testtwo@gmail.com', town: 'Boksburg',
        suburb: "Windmill Park", street: "887 Coetsee Street", code: "1459"
      },
    {
      name: 'Three', surname: 'three', email: 'testthree@gmail.com', town: 'Johannesburg',
      suburb: "Ferndale", street: "71 Coetsee Street", code: "2000"
    },
    {
      name: 'Four', surname: 'four', email: 'testfour@gmail.com', town: 'Randburg',
      suburb: "OAK", street: "9 West Street", code: "3920"
    },
    {
      name: 'Five', surname: 'five', email: 'testfive@gmail.com', town: 'Randburg',
      suburb: "Ferndale", street: "10 Coetsee Street", code: "2020"
    },
    {
      name: 'Six', surname: 'six', email: 'testsix@gmail.com', town: 'Randburg',
      suburb: "Ferndale", street: "18 Coetsee Street", code: "2920"
    },
    {
      name: 'Seven', surname: 'seven', email: 'testseven@gmail.com', town: 'Randburg',
      suburb: "Ferndale", street: "2 Coetsee Street", code: "4205"
    },
    {
      name: 'Eight', surname: 'eight', email: 'testeight@gmail.com', town: 'Randburg',
      suburb: "Ferndale", street: "4 Coetsee Street", code: "2140"
    },
    {
      name: 'Nine', surname: 'nine', email: 'testnine@gmail.com', town: 'Randburg',
      suburb: "Ferndale", street: "69 Coetsee Street", code: "4930"
    },
    {
      name: 'Ten', surname: 'Ten', email: 'Ten@gmail.com', town: 'Randburg',
      suburb: "Ferndale", street: "5 Coetsee Street", code: "8790"
    }
  ]
  roles: any[] = []
  additionalDetailsLabels: any[] = ["IMEI Number", "ITC reference number", "List of stolen items", "Police case number", "Previous Insurance Details", "Mileage", "Additional comments", "Police station name", "Where is the geyser located", "What is the heating source", "Was there any resultant damage", "Did the vehicle roll", "Did the airbags deploy", "Replaced", "How was the entery gained", "Alarm activated", "What was damage at entry point", "Address Moved from"]
  additionalDetailsData: any = [
    {
      display: "IMEI Number",
      status: false,
      questionType: "Text",
      displayQuestionText: "Please enter your IMEI number.",
      inputType: "input"
    },
    {
      display: "ITC reference number",
      status: false,
      questionType: "Text",
      displayQuestionText: "Please capture the ITC reference number.",
      inputType: "input"
    },
    {
      display: "List of stolen items",
      status: false,
      questionType: "Text",
      displayQuestionText: "Please upload a list of your stolen items.",
      inputType: "input"
    },
    {
      display: "Police case number",
      status: false,
      questionType: "Text",
      displayQuestionText: "Please capture your police case number.",
      "inputType": "input"
    },
    {
      display: "Previous Insurance Details",
      status: false,
      questionType: "Text",
      displayQuestionText: "Please enter details of your previous insurance cover.",
      inputType: "input"
    },
    {
      display: "Mileage",
      status: false,
      questionType: "Text",
      displayQuestionText: "Please capture the mileage of your vehicle.",
      inputType: "input"
    },
    {
      display: "Additional comments",
      status: false,
      questionType: "Text",
      displayQuestionText: "Would you like to add any additional comments?",
      inputType: "input"
    },
    {
      display: "Police station name",
      status: false,
      questionType: "Text",
      displayQuestionText: "Which police station did you report this incident to?",
      inputType: "input"
    },
    {
      display: "Where is the geyser located?",
      status: false,
      questionType: "GeyserLocation",
      displayQuestionText: "Where is the geyser located?",
      inputType: "input"
    },
    {
      display: "What is the heating source?",
      status: false,
      questionType: "HeatingSource",
      displayQuestionText: "Please select the heating source of your geyser",
      inputType: "input"
    },
    {
      display: "Was there any resultant damage?",
      status: false,
      questionType: "ResultantDamages",
      displayQuestionText: "Were there any resultant damages to your building caused by the geyser?",
      inputType: "input"
    },
    {
      display: "Did the vehicle roll?",
      status: false,
      questionType: "YesNo",
      displayQuestionText: "Did the vehicle roll?",
      inputType: "input"
    },
    {
      display: "Did the airbags deploy?",
      status: false,
      questionType: "YesNo",
      displayQuestionText: "Did the airbags deploy?",
      inputType: "input"
    },
    {
      display: "Replaced",
      inputType: "select",
      // display: [
      //   { value: 'Replaced Additional', viewValue: 'Addictional Value' },
      //   { value: 'Replaced Addition', viewValue: 'Add' }
      // ]
    },
    {
      display: "How was the entery gained",
      inputType: "input"
    },
    {
      display: "Alarm activated",
      inputType: "select",
      // display: [
      //   { value: 'Alarm activated', viewValue: 'Alarm active' },
      //   { value: 'Activated alarm', viewValue: 'Alarm' }
      // ]
    },
    {
      display: "What was damage at entry point",
      inputType: "input"
    },
    {
      display: "Address Moved from",
      inputType: "input"
    }
  ]
  lastElement: number = 0;
  constructor() { }
  ngOnInit(): void {
    this.lastElement = this.additionalDetailsData[this.additionalDetailsData.length - 1];
    console.log(this.users, this.lastElement)
  }

}
