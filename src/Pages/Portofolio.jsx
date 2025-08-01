import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardProject from "../components/CardProject";
import TechStackIcon from "../components/TechStackIcon";
import AOS from "aos";
import "aos/dist/aos.css";
import Certificate from "../components/Certificate";
import { Code, Award, Boxes, GraduationCap, Users, Briefcase, Trophy } from "lucide-react";
import { supabase } from "../supabase"; 

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

const techStacks = [
  { icon: "html.svg", language: "HTML" },
  { icon: "css.svg", language: "CSS" },
  { icon: "javascript.svg", language: "JavaScript" },
  { icon: "tailwind.svg", language: "Tailwind CSS" },
  { icon: "reactjs.svg", language: "ReactJS" },
  { icon: "vite.svg", language: "Vite" },
  { icon: "nodejs.svg", language: "Node JS" },
  { icon: "bootstrap.svg", language: "Bootstrap" },
  { icon: "firebase.svg", language: "Firebase" },
  { icon: "MUI.svg", language: "Material UI" },
  { icon: "vercel.svg", language: "Vercel" },
  { icon: "SweetAlert.svg", language: "SweetAlert2" },
];

// Certificate category configuration
const certificateCategories = {
  allexperience: {
    label: "All Experience",
    icon: Award,
    filter: () => true // Show all certificates
  },
  bootcamp: {
    label: "Bootcamp",
    icon: GraduationCap,
    filter: (cert) => cert.category?.toLowerCase() === 'bootcamp'
  },
  volunteer: {
    label: "Volunteer",
    icon: Users,
    filter: (cert) => cert.category?.toLowerCase() === 'volunteer'
  },
  internship: {
    label: "Internship",
    icon: Briefcase,
    filter: (cert) => cert.category?.toLowerCase() === 'internship'
  }
};

// Sub-component for Certificate Categories
const CertificateCategories = ({ certificates, showAllCertificates, toggleShowMore, initialItems }) => {
  const theme = useTheme();
  const [categoryValue, setCategoryValue] = useState(0);

  const handleCategoryChange = (event, newValue) => {
    setCategoryValue(newValue);
  };

  // Filter certificates by category
  const getFilteredCertificates = (categoryKey) => {
    const category = certificateCategories[categoryKey];
    return certificates.filter(category.filter);
  };

  const getCertificateDisplayData = (categoryKey) => {
    const filteredCerts = getFilteredCertificates(categoryKey);
    const isShowingAll = showAllCertificates[categoryKey];
    const displayed = isShowingAll ? filteredCerts : filteredCerts.slice(0, initialItems);
    
    return {
      certificates: displayed,
      hasMore: filteredCerts.length > initialItems,
      isShowingAll
    };
  };

  return (
    <Box sx={{ width: "100%" }}>
      {/* Certificate Category Tabs */}
      <Box sx={{ mb: 3 }}>
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
              background: "linear-gradient(180deg, rgba(16, 185, 129, 0.02) 0%, rgba(6, 182, 212, 0.02) 100%)",
              backdropFilter: "blur(10px)",
              zIndex: 0,
            },
          }}
        >
          <Tabs
            value={categoryValue}
            onChange={handleCategoryChange}
            textColor="primary"
            indicatorColor="primary"
            variant="fullWidth"
            sx={{
              minHeight: "60px",
              "& .MuiTab-root": {
                fontSize: { xs: "0.8rem", md: "0.9rem" },
                fontWeight: "600",
                color: "#64748b",
                textTransform: "none",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                padding: "16px 12px",
                zIndex: 1,
                margin: "6px 4px",
                borderRadius: "10px",
                minWidth: "auto",
                "&:hover": {
                  color: "#047857",
                  backgroundColor: "rgba(16, 185, 129, 0.08)",
                  transform: "translateY(-1px)",
                  "& .lucide": {
                    transform: "scale(1.05)",
                    color: "#10b981",
                  },
                },
                "&.Mui-selected": {
                  color: "#047857",
                  background: "linear-gradient(135deg, rgba(16, 185, 129, 0.12), rgba(6, 182, 212, 0.08))",
                  boxShadow: "0 2px 8px -2px rgba(16, 185, 129, 0.3)",
                  "& .lucide": {
                    color: "#10b981",
                  },
                },
              },
              "& .MuiTabs-indicator": {
                height: 0,
              },
            }}
          >
            {Object.entries(certificateCategories).map(([key, config], index) => {
              const IconComponent = config.icon;
              return (
                <Tab
                  key={key}
                  icon={<IconComponent className="mb-1 w-4 h-4 transition-all duration-300 text-slate-500" />}
                  label={config.label}
                  {...a11yProps(index)}
                />
              );
            })}
          </Tabs>
        </AppBar>
      </Box>

      {/* Certificate Category Content */}
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={categoryValue}
        onChangeIndex={setCategoryValue}
      >
        {Object.keys(certificateCategories).map((categoryKey, index) => {
          const displayData = getCertificateDisplayData(categoryKey);
          
          return (
            <TabPanel key={categoryKey} value={categoryValue} index={index} dir={theme.direction}>
              <div className="container mx-auto flex justify-center items-center overflow-hidden">
                {displayData.certificates.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6 gap-4">
                    {displayData.certificates.map((certificate, certIndex) => (
                      <div
                        key={certificate.id || certIndex}
                        data-aos={certIndex % 3 === 0 ? "fade-up-right" : certIndex % 3 === 1 ? "fade-up" : "fade-up-left"}
                        data-aos-duration={certIndex % 3 === 0 ? "1000" : certIndex % 3 === 1 ? "1200" : "1000"}
                      >
                        <Certificate 
                          ImgSertif={certificate.Img} 
                          category={certificate.kategori}
                          link={certificate.link}
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="text-gray-400 mb-4">
                      <Trophy className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">
                      No {certificateCategories[categoryKey].label} Certificates Yet
                    </h3>
                    <p className="text-gray-500">
                      Certificates in this category will appear here once available.
                    </p>
                  </div>
                )}
              </div>
              {displayData.hasMore && (
                <div className="mt-8 w-full flex justify-center">
                  <ToggleButton
                    onClick={() => toggleShowMore('certificates', categoryKey)}
                    isShowingMore={displayData.isShowingAll}
                  />
                </div>
              )}
            </TabPanel>
          );
        })}
      </SwipeableViews>
    </Box>
  );
};

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [projects, setProjects] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState({
    allexperience: false,
    bootcamp: false,
    volunteer: false,
    internship: false
  });
  const isMobile = window.innerWidth < 768;
  const initialItems = isMobile ? 4 : 6;

  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  const fetchData = useCallback(async () => {
    try {
      const [projectsResponse, certificatesResponse] = await Promise.all([
        supabase.from("projects").select("*").order('id', { ascending: true }),
        supabase.from("certificates").select("*").order('id', { ascending: true }), 
      ]);

      if (projectsResponse.error) throw projectsResponse.error;
      if (certificatesResponse.error) throw certificatesResponse.error;

      const projectData = projectsResponse.data || [];
      const certificateData = certificatesResponse.data || [];

      setProjects(projectData);
      setCertificates(certificateData);

      localStorage.setItem("projects", JSON.stringify(projectData));
      localStorage.setItem("certificates", JSON.stringify(certificateData));
    } catch (error) {
      console.error("Error fetching data from Supabase:", error.message);
    }
  }, []);

  useEffect(() => {
    const cachedProjects = localStorage.getItem('projects');
    const cachedCertificates = localStorage.getItem('certificates');

    if (cachedProjects && cachedCertificates) {
        setProjects(JSON.parse(cachedProjects));
        setCertificates(JSON.parse(cachedCertificates));
    }
    
    fetchData();
  }, [fetchData]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleShowMore = useCallback((type, category = null) => {
    if (type === 'projects') {
      setShowAllProjects(prev => !prev);
    } else if (type === 'certificates' && category) {
      setShowAllCertificates(prev => ({
        ...prev,
        [category]: !prev[category]
      }));
    }
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
          Explore my journey through projects, certifications, and technical expertise. 
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
              icon={<Award className="mb-2 w-5 h-5 transition-all duration-300 text-slate-500" />}
              label="Certificates"
              {...a11yProps(1)}
            />
            <Tab
              icon={<Boxes className="mb-2 w-5 h-5 transition-all duration-300 text-slate-500" />}
              label="Tech Stack"
              {...a11yProps(2)}
            />
          </Tabs>
        </AppBar>

        {/* Main Content Panels */}
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={setValue}
        >
          {/* Projects Tab Panel */}
          <TabPanel value={value} index={0} dir={theme.direction}>
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

          {/* Certificates Tab Panel with Sub-categories */}
          <TabPanel value={value} index={1} dir={theme.direction}>
            <CertificateCategories
              certificates={certificates}
              showAllCertificates={showAllCertificates}
              toggleShowMore={toggleShowMore}
              initialItems={initialItems}
            />
          </TabPanel>

          {/* Tech Stack Tab Panel */}
          <TabPanel value={value} index={2} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden pb-[5%]">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-8 gap-5">
                {techStacks.map((stack, index) => (
                  <div
                    key={index}
                    data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                    data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                  >
                    <TechStackIcon TechStackIcon={stack.icon} Language={stack.language} />
                  </div>
                ))}
              </div>
            </div>
          </TabPanel>
        </SwipeableViews>
      </Box>
    </div>
  );
}