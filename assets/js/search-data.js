// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Peer-reviewed publications in reverse chronological order. See my CV for a list of first-author papers.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "Selected open-source projects and research software from my GitHub profile.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-resume",
          title: "Resume",
          description: "Resume for Dr. C.M. (Kees) Nederhoff - Coastal Scientist specializing in flood risk, hydrodynamics, and nature-based solutions. Last updated October 2025",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-completing-a-phd-while-working-full-time-reflections-from-my-defense",
        
          title: "Completing a PhD While Working Full-Time - Reflections from My Defense",
        
        description: "Reflections on completing a PhD in Coastal Engineering while maintaining a full-time research position",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/phd/";
          
        },
      },{id: "news-oral-presentation-on-morphodynamic-modeling-of-eden-landing-at-american-shore-and-beach-preservation-association-asbpa-national-coastal-conference-long-beach-ca",
          title: 'Oral presentation on morphodynamic modeling of Eden Landing at American Shore and Beach...',
          description: "",
          section: "News",},{id: "news-new-paper-published-mitigating-flood-risks-in-urban-estuaries-tidal-dynamics-shoreline-hardening-nature-based-solutions-and-floodgates-in-san-francisco-bay-in-asce-journal-of-waterway-port-coastal-and-ocean-engineering",
          title: 'New paper published: “Mitigating Flood Risks in Urban Estuaries: Tidal Dynamics, Shoreline Hardening,...',
          description: "",
          section: "News",},{id: "news-presented-research-on-san-francisco-bay-compound-flooding-at-state-of-the-estuary-conference-oakland-ca",
          title: 'Presented research on San Francisco Bay compound flooding at State of the Estuary...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6B%65%65%73.%6E%65%64%65%72%68%6F%66%66@%64%65%6C%74%61%72%65%73-%75%73%61.%75%73", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/keesnederhoff", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/kees-nederhoff", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0003-0552-3428", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=upIx3HkAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
