import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardProject from "../components/CardProject";
import AOS from "aos";
import "aos/dist/aos.css";
import TechStackIcon from "../components/TechStackIcon";
import { Code, Boxes } from "lucide-react";
import { projects as projectData } from "../data/projects";

const ToggleButton = ({ onClick, isShowingMore }) => (
  <button
    onClick={onClick}
    className="
      px-4 py-2
      text-emerald-600 
      hover:text-emerald-700 
      text-sm 
      font-medium 
      transition-all 
      duration-300 
      ease-in-out
      flex 
      items-center 
      gap-2
      bg-emerald-50 
      hover:bg-emerald-100
      rounded-lg
      border 
      border-emerald-200
      hover:border-emerald-300
      shadow-sm
      group
      relative
      overflow-hidden
    "
  >
    <span className="relative z-10 flex items-center gap-2">
      {isShowingMore ? "See Less" : "See More"}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`
          transition-transform 
          duration-300 
          ${isShowingMore ? "group-hover:-translate-y-0.5" : "group-hover:translate-y-0.5"}
        `}
      >
        <polyline points={isShowingMore ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}></polyline>
      </svg>
    </span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
  </button>
);

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 1, sm: 3 } }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

// Tech stack (logo lokal di /public/tech). Satu daftar terpadu.
const TECH_STACK = [
  { icon: "/tech/python.svg", language: "Python" },
  { icon: "/tech/tensorflow.svg", language: "TensorFlow" },
  { icon: "/tech/pytorch.svg", language: "PyTorch" },
  { icon: "/tech/keras.svg", language: "Keras" },
  { icon: "/tech/scikitlearn.svg", language: "scikit-learn" },
  { icon: "/tech/huggingface.svg", language: "Hugging Face" },
  { icon: "/tech/pandas.svg", language: "Pandas" },
  { icon: "/tech/numpy.svg", language: "NumPy" },
  { icon: "/tech/matplotlib.svg", language: "Matplotlib" },
  { icon: "/tech/docker.svg", language: "Docker" },
  { icon: "/tech/fastapi.svg", language: "FastAPI" },
  { icon: "/tech/mlflow.svg", language: "MLflow" },
  { icon: "/tech/prometheus.svg", language: "Prometheus" },
  { icon: "/tech/grafana.svg", language: "Grafana" },
];

export default function FullWidthTabs() {
  const [value, setValue] = useState(0);
  const [projects] = useState(projectData);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const isMobile = window.innerWidth < 768;
  const initialItems = isMobile ? 4 : 6;

  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleShowMore = useCallback(() => {
    setShowAllProjects(prev => !prev);
  }, []);

  const displayedProjects = showAllProjects ? projects : projects.slice(0, initialItems);

  return (
    <div className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-white overflow-hidden py-12" id="Portofolio">
      <div className="text-center pb-10" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="text-4xl md:text-5xl font-bold text-center mx-auto">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">
            Portfolio Showcase
          </span>
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base mt-2">
          Explore my journey through projects and technical expertise.
          Each section represents a milestone in my continuous learning path.
        </p>
      </div>

      <Box sx={{ width: "100%" }}>
        {/* Main Navigation Tabs */}
        <AppBar
          position="static"
          elevation={0}
          sx={{
            bgcolor: "transparent",
            border: "1px solid #e2e8f0",
            borderRadius: "12px",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "linear-gradient(180deg, rgba(16, 185, 129, 0.03) 0%, rgba(6, 182, 212, 0.03) 100%)",
              backdropFilter: "blur(10px)",
              zIndex: 0,
            },
          }}
          className="md:px-4"
        >
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="primary"
            indicatorColor="primary"
            variant="fullWidth"
            sx={{
              minHeight: "70px",
              "& .MuiTab-root": {
                fontSize: { xs: "0.9rem", md: "1rem" },
                fontWeight: "600",
                color: "#64748b",
                textTransform: "none",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                padding: "20px 0",
                zIndex: 1,
                margin: "8px",
                borderRadius: "12px",
                "&:hover": {
                  color: "#047857",
                  backgroundColor: "rgba(16, 185, 129, 0.1)",
                  transform: "translateY(-2px)",
                  "& .lucide": {
                    transform: "scale(1.1) rotate(5deg)",
                    color: "#10b981",
                  },
                },
                "&.Mui-selected": {
                  color: "#047857",
                  background: "linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1))",
                  boxShadow: "0 4px 15px -3px rgba(16, 185, 129, 0.2)",
                  "& .lucide": {
                    color: "#10b981",
                  },
                },
              },
              "& .MuiTabs-indicator": {
                height: 0,
              },
              "& .MuiTabs-flexContainer": {
                gap: "8px",
              },
            }}
          >
            <Tab
              icon={<Code className="mb-2 w-5 h-5 transition-all duration-300 text-slate-500" />}
              label="Projects"
              {...a11yProps(0)}
            />
            <Tab
              icon={<Boxes className="mb-2 w-5 h-5 transition-all duration-300 text-slate-500" />}
              label="Tech Stack"
              {...a11yProps(1)}
            />
          </Tabs>
        </AppBar>

        {/* Main Content Panels */}
        <div>
          {/* Projects Tab Panel */}
          <TabPanel value={value} index={0}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-6">
                {displayedProjects.map((project, index) => (
                  <div
                    key={project.id || index}
                    data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                    data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                  >
                    <CardProject
                      Img={project.Img}
                      Title={project.Title}
                      Description={project.Description}
                      Link={project.Link}
                      id={project.id}
                    />
                  </div>
                ))}
              </div>
            </div>
            {projects.length > initialItems && (
              <div className="mt-8 w-full flex justify-center">
                <ToggleButton
                  onClick={() => toggleShowMore('projects')}
                  isShowingMore={showAllProjects}
                />
              </div>
            )}
          </TabPanel>

          {/* Tech Stack Tab Panel */}
          <TabPanel value={value} index={1}>
            <div className="container mx-auto pb-[5%]">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                {TECH_STACK.map((stack, index) => (
                  <div
                    key={stack.language}
                    data-aos={index % 2 === 0 ? "fade-up-right" : "fade-up-left"}
                    data-aos-duration="1000"
                  >
                    <TechStackIcon TechStackIcon={stack.icon} Language={stack.language} />
                  </div>
                ))}
              </div>
            </div>
          </TabPanel>
        </div>
      </Box>
    </div>
  );
}