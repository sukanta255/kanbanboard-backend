const mongoose = require("mongoose");

const boardSchema=mongoose.Schema({
    name:{type:String,required:true},
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'task'}]
})

const BoardModel = mongoose.model("board",boardSchema)
module.exports={
    BoardModel
}

// boards
// {
//     "name": "Todo",
//     "tasks": [
//       {
//         "title": "Build UI for onboarding flow",
//         "description": "",
//         "status": "Todo",
//         "subtasks": [
//           {
//             "title": "Sign up page",
//             "isCompleted": true
//           },
//           {
//             "title": "Sign in page",
//             "isCompleted": false
//           },
//           {
//             "title": "Welcome page",
//             "isCompleted": false
//           }
//         ]
//       },
//       {
//         "title": "Build UI for search",
//         "description": "",
//         "status": "Todo",
//         "subtasks": [
//           {
//             "title": "Search page",
//             "isCompleted": false
//           }
//         ]
//       }
//     ]
//   }

// {
//     "boards": [
//       {
//         "name": "Todo",
//         "tasks": [
//           {
//             "title": "Build UI for onboarding flow",
//             "description": "",
//             "status": "Todo",
//             "subtasks": [
//               {
//                 "title": "Sign up page",
//                 "isCompleted": true
//               },
//               {
//                 "title": "Sign in page",
//                 "isCompleted": false
//               },
//               {
//                 "title": "Welcome page",
//                 "isCompleted": false
//               }
//             ]
//           },
//           {
//             "title": "Build UI for search",
//             "description": "",
//             "status": "Todo",
//             "subtasks": [
//               {
//                 "title": "Search page",
//                 "isCompleted": false
//               }
//             ]
//           }
//         ]
//       }
//       ,
//       {
//         "name": "Doing",
//         "tasks": [
//           {
//             "title": "Design settings and search pages",
//             "description": "",
//             "status": "Doing",
//             "subtasks": [
//               {
//                 "title": "Settings - Account page",
//                 "isCompleted": true
//               },
//               {
//                 "title": "Settings - Billing page",
//                 "isCompleted": true
//               },
//               {
//                 "title": "Search page",
//                 "isCompleted": false
//               }
//             ]
//           },
//           {
//             "title": "Add account management endpoints",
//             "description": "",
//             "status": "Doing",
//             "subtasks": [
//               {
//                 "title": "Upgrade plan",
//                 "isCompleted": true
//               },
//               {
//                 "title": "Cancel plan",
//                 "isCompleted": true
//               },
//               {
//                 "title": "Update payment method",
//                 "isCompleted": false
//               }
//             ]
//           }
//         ]
//       },
//       {
//         "name": "Done",
//         "tasks": [
//           {
//             "title": "Conduct 5 wireframe tests",
//             "description": "Ensure the layout continues to make sense and we have strong buy-in from potential users.",
//             "status": "Done",
//             "subtasks": [
//               {
//                 "title": "Complete 5 wireframe prototype tests",
//                 "isCompleted": true
//               }
//             ]
//           }
//         ]
//       }
//     ]
//   }