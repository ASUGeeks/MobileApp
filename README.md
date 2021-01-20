# LMS MobileApp using React-Native framework

## Project structure:
.
├── App.js
├── README.md
├── package.json
└── shared
│   └── index.js
├── navigation
│   ├── BottomNavigation.js
│   └── Header.js
├── icons
├── assets
└── screens
    ├── Admin
    │   ├── Admin.js
    │   └── screens
    │       ├──  Main
    │       │  └── Main.js
    │       ├── AcceptUser
    │       │   ├── AcceptUser.js
    │       │   └── components
    │       │       ├── StudentList.js
    │       │       └── TeacherLIst.js
    │       ├── CreateCourse
    │       │   └── CreateCourse.js
    │       └── CreateUser
    │           └── CreateUser.js
    ├── StudentDash
    │   ├── StudentDashboard.js
    │   └── screens
    │       ├── Main
    │       │  ├──  Main.js
    │       │  └── components
    │       │       ├── Modal.js
    │       │       └── SubjectCard.js
    │       ├── Assignments
    │       │   ├── Assignments.js
    │       │   └── components
    │       │       └──  AssCard.js
    │       ├── AssScreen
    │       │  ├── AssScreen.js
    │       ├── CourseMaterial
    │       │  ├── CourseMaterial.js
    │       │  └── components
    │       │       └── ContentList.js
    │       ├── Discussion
    │       │  ├── Discussion.js
    │       ├── OpenMaterial
    │       │  ├──  OpenMaterial.js
    │       ├── Quizes
    │       │  ├──  Quizes.js
    │       │  └── components
    │       │       └── QuizzCard.js
    │       ├── QuizzScreen
    │         ├── QuizzScreen.js
    └── TeacherDash
    │   ├── TeacherDashboard.js
    │   └── screens
    │       ├── Main
    │       │  └── Main.js
    │       ├── Announce
    │       │  └── Announce.js
    │       ├── Assignments
    │       │  └── Assignments.js
    │       ├── CourseSpecification
    │       │  └── CourseSpecification.js
    │       ├── CreateQuiz
    │       │  └── CreateQuiz.js
    │       ├── DIsplayAsses
    │       │  └── DIsplayAsses.js
    │       ├── GradeAss
    │       │  └── GradeAss.js
    │       ├── PostLearningMaterials
    │       │  └── PostLearningMaterials.js
    │       └── TeacherDiscussion
    │          └── TeacherDiscussion.js
    └── Login
       └── Login.js

### Setup the project:
- ** You should have node.js & expo-cli installed ** if not run npm install expo-cli
- run git clone {project URL}
- cd MobileApp
- npm install
- expo start

#### We will use react-native-paper for UI components: https://docs.nativebase.io/Components.html#Components
