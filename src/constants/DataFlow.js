import { images } from "./AssetsFile";

const DataCertificates = [
 {
  id: 1,
  certName: "HCIA-Cloud Services V2.2",
  certImage: images.designer,
  certDate: "September 5, 2021",
  certFrom: "Huawei",
 },
 {
  id: 2,
  certName: "HCIA-AI Course",
  certImage: images.designer,
  certDate: "September 5, 2021",
  certFrom: "Huawei",
 },
 {
  id: 3,
  certName: "HCIA-Big Data Course",
  certImage: images.designer,
  certDate: "September 5, 2021",
  certFrom: "Huawei",
 },
 {
  id: 4,
  certName: "HCIA-Cloud Computing",
  certImage: images.designer,
  certDate: "September 5, 2021",
  certFrom: "Huawei",
 },
 {
  id: 5,
  certName: "HCIA-Storage",
  certImage: images.designer,
  certDate: "September 7, 2021",
  certFrom: "Huawei",
 },
 {
  id: 6,
  certName: "HCIE-Big Data-Data Mining",
  certImage: images.designer,
  certDate: "September 12, 2021",
  certFrom: "Huawei",
 },
 {
  id: 7,
  certName: "HCIE-Cloud Service Solution Architech",
  certImage: images.designer,
  certDate: "September 17, 2021",
  certFrom: "Huawei",
 },
 {
  id: 8,
  certName: "HCIP-AI EI Developer",
  certImage: images.designer,
  certDate: "September 7, 2021",
  certFrom: "Huawei",
 },
 {
  id: 9,
  certName: "HCIP-Storage Course",
  certImage: images.designer,
  certDate: "September 5, 2021",
  certFrom: "Huawei",
 },
]


// Services page
const Services = [
    {
        id: 1,
        type: "App Development",
        content: "Dedicated to app development, I specialize in React Native & Material-UI, creating cross-platform mobile solutions with intuitive design and user-focused functionality.",
        logo: images.mobiledev,
    },
    {
        id: 2,
        type: "Machine Learning",
        content: "Fueled by a passion for Machine Learning, I explore algorithms and techniques to derive insights, innovate solutions, and empower data-driven decisions, shaping a smarter tomorrow.",
        logo: images.machinelearning,
    },
    {
        id: 3,
        type: "Data Science",
        content: "Driven by a passion for Data Science, I explore datasets, apply analytical methods, and develop models to uncover insights, solve complex problems, and drive informed decisions for a smarter future.",
        logo: images.datasceince,
    },
    {
        id: 4,
        type: "Web Development",
        content: "With a fervent dedication to web development, I create dynamic, responsive websites using modern tools and frameworks. From design to deployment, I strive to deliver seamless user experiences and innovative solutions that captivate and engage audiences.",
        logo: images.webservices,
    },
]

// Experience section >> Home page
const ExperienceData = [
    {
        id: 1,
        company: "TRA",
        duration: "8Months",
        technologies: "React, React native, JavaScript, HTML, CSS",
        role: "Frontend Developer",
        compLogo: images.sitelogo,
    },
    {
        id: 2,
        company: "Deveint Ltd.",
        duration: "4Months",
        technologies: "React, React native, JavaScript, HTML, CSS, PHP, MySQL",
        role: "Full Stack Developer",
        compLogo: images.sitelogo,
    },
    {
        id: 3,
        company: "Huawei",
        duration: "1.5Year",
        technologies: "Big Data, ML, Cloud Computing",
        role: "Seed for future",
        compLogo: images.sitelogo,
    },
]

// Projects >> Links
// https://ficyouths-site.netlify.app
// https://dorminant-color-detector-in-an-image.netlify.app
// https://facial-recognition-based-attendance.netlify.app
// https://shopping-cartpro.netlify.app
// https://loan-prediction.netlify.app
// https://prototype295.netlify.app
// https://faqquizes.netlify.app
// https://multiple-profile-todo.netlify.app
// https://commerceadmin.netlify.app
const ProjectData = [
    {
        id: 1,
        category: "Website",
        proName: "Modern Dashboard",
        proLink: "https://commerceadmin.netlify.app",
        proImage: images.proDashboad,
        start: "Feb, 2023",
        end: "Jun, 2023",
        isComplited: true,
        description: "With a fervent dedication to web development, I create dynamic, responsive websites using modern tools and frameworks. From design to deployment, I strive to deliver seamless user experiences and innovative solutions that captivate and engage audiences.",
    },
    {
        id: 2,
        category: "Website",
        proName: "Youth Service",
        proLink: "https://ficyouths-site.netlify.app",
        proImage: images.projectFIC,
        start: "Jan, 2023",
        end: "Mar, 2023",
        isComplited: true,
        description: "With a fervent dedication to web development, I create dynamic, responsive websites using modern tools and frameworks. From design to deployment, I strive to deliver seamless user experiences and innovative solutions that captivate and engage audiences.",
    },
    {
        id: 3,
        category: "ML",
        proName: "Color Shades",
        proLink: "https://dorminant-color-detector-in-an-image.netlify.app",
        proImage: images.proDominantColor,
        start: "Aug, 2022",
        end: "Dec, 2022",
        isComplited: true,
        description: "With a fervent dedication to web development, I create dynamic, responsive websites using modern tools and frameworks. From design to deployment, I strive to deliver seamless user experiences and innovative solutions that captivate and engage audiences.",
    },
    {
        id: 4,
        category: "ML",
        proName: "Facial Attendance",
        proLink: "https://facial-recognition-based-attendance.netlify.app",
        proImage: images.proFacial,
        start: "Feb, 2023",
        end: "Jun, 2023",
        isComplited: true,
        description: "With a fervent dedication to web development, I create dynamic, responsive websites using modern tools and frameworks. From design to deployment, I strive to deliver seamless user experiences and innovative solutions that captivate and engage audiences.",
    },
    {
        id: 5,
        category: "Website",
        proName: "Online Store",
        proLink: "https://shopping-cartpro.netlify.app",
        proImage: images.proShopping,
        start: "Feb, 2023",
        end: "Jun, 2023",
        isComplited: true,
        description: "With a fervent dedication to web development, I create dynamic, responsive websites using modern tools and frameworks. From design to deployment, I strive to deliver seamless user experiences and innovative solutions that captivate and engage audiences.",
    },
    {
        id: 6,
        category: "DS",
        proName: "Loan Classifier",
        proLink: "https://loan-prediction.netlify.app",
        proImage: images.proLoan,
        start: "Feb, 2023",
        end: "Jun, 2023",
        isComplited: true,
        description: "With a fervent dedication to web development, I create dynamic, responsive websites using modern tools and frameworks. From design to deployment, I strive to deliver seamless user experiences and innovative solutions that captivate and engage audiences.",
    },
    {
        id: 7,
        category: "Website",
        proName: "Free Template",
        proLink: "https://prototype295.netlify.app",
        proImage: images.proPortTemplate,
        start: "Jan, 2024",
        end: "Mar, 2024",
        isComplited: false,
        description: "With a fervent dedication to web development, I create dynamic, responsive websites using modern tools and frameworks. From design to deployment, I strive to deliver seamless user experiences and innovative solutions that captivate and engage audiences.",
    },
    {
        id: 8,
        category: "Website",
        proName: "FAQ Sanple",
        proLink: "https://faqquizes.netlify.app",
        proImage: images.proFaq,
        start: "Feb, 2023",
        end: "Jun, 2023",
        isComplited: true,
        description: "With a fervent dedication to web development, I create dynamic, responsive websites using modern tools and frameworks. From design to deployment, I strive to deliver seamless user experiences and innovative solutions that captivate and engage audiences.",
    },
    {
        id: 9,
        category: "App",
        proName: "T0-do App",
        proLink: "https://multiple-profile-todo.netlify.app",
        proImage: images.proTodoList,
        start: "Feb, 2023",
        end: "Jun, 2023",
        isComplited: true,
        description: "With a fervent dedication to web development, I create dynamic, responsive websites using modern tools and frameworks. From design to deployment, I strive to deliver seamless user experiences and innovative solutions that captivate and engage audiences.",
    },
]


export {DataCertificates, Services, ExperienceData, ProjectData}