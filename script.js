document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('learning-form');
    const pathContainer = document.getElementById('learning-path-container');

    // --- Mock AI Data & Logic (Expanded with Trending Courses) ---
    const learningData = {
        'python': {
            title: 'Python for Data Science',
            path: [
                {
                    title: 'Module 1: Python Fundamentals',
                    description: 'Master the basics of Python syntax, data types, and control flow.',
                    resources: {
                        visual: 'Watch a video series on Python for Beginners on YouTube.',
                        reading: 'Read the official Python documentation on Data Structures.',
                        kinesthetic: 'Solve 10 basic problems on HackerRank using Python.'
                    }
                },
                {
                    title: 'Module 2: Core Data Science Libraries',
                    description: 'Learn NumPy for numerical operations and Pandas for data manipulation.',
                    resources: {
                        visual: 'Follow a tutorial on creating a Pandas DataFrame from scratch.',
                        reading: 'Go through the "10 minutes to pandas" guide.',
                        kinesthetic: 'Clean and analyze a sample CSV dataset using Pandas.'
                    }
                },
                {
                    title: 'Module 3: Data Visualization',
                    description: 'Understand how to create insightful plots and charts with Matplotlib and Seaborn.',
                    resources: {
                        visual: 'Explore the Seaborn example gallery for inspiration.',
                        reading: 'Read a blog post on "The Grammar of Graphics".',
                        kinesthetic: 'Create 5 different types of charts from your dataset.'
                    }
                }
            ]
        },
        'web': {
            title: 'Full-Stack Web Development',
            path: [
                {
                    title: 'Module 1: Frontend Fundamentals (HTML, CSS, JS)',
                    description: 'Build the foundation of web development by mastering the core client-side technologies.',
                    resources: {
                        visual: 'Complete the freeCodeCamp course on Responsive Web Design.',
                        reading: 'Read the MDN Web Docs for HTML, CSS, and JavaScript.',
                        kinesthetic: 'Build a personal portfolio website from scratch.'
                    }
                },
                {
                    title: 'Module 2: Modern Frontend Framework',
                    description: 'Learn a popular framework like React or Vue.js to build dynamic user interfaces.',
                    resources: {
                        visual: 'Follow the official React tutorial to build a tic-tac-toe game.',
                        reading: 'Read articles comparing React, Vue, and Angular.',
                        kinesthetic: 'Rebuild your portfolio website using React.'
                    }
                },
                {
                    title: 'Module 3: Backend Development',
                    description: 'Learn Node.js and Express to build servers and APIs.',
                    resources: {
                        visual: 'Watch a crash course on building a REST API with Node.js/Express.',
                        reading: 'Study the Express.js documentation on routing and middleware.',
                        kinesthetic: 'Create a simple API that serves data for your frontend application.'
                    }
                }
            ]
        },
        'machine_learning': {
            title: 'Introduction to Machine Learning',
            path: [
                {
                    title: 'Module 1: Foundations of ML & AI',
                    description: 'Understand the core concepts, types of machine learning (supervised, unsupervised), and key terminology.',
                    resources: {
                        visual: 'Watch Andrew Ng\'s "AI for Everyone" series on Coursera/YouTube.',
                        reading: 'Read the introduction chapter of "Hands-On Machine Learning" by Aurélien Géron.',
                        kinesthetic: 'Set up a Python environment with Scikit-learn and Jupyter Notebooks.'
                    }
                },
                {
                    title: 'Module 2: Supervised Learning Algorithms',
                    description: 'Learn about regression and classification models like Linear Regression and Logistic Regression.',
                    resources: {
                        visual: 'Watch a StatQuest video explaining Linear Regression visually.',
                        reading: 'Read articles on the difference between classification and regression.',
                        kinesthetic: 'Build a simple prediction model using the Scikit-learn library on a sample dataset.'
                    }
                },
                {
                    title: 'Module 3: Model Evaluation and Validation',
                    description: 'Learn how to measure the performance of your models using metrics like accuracy, precision, and recall.',
                    resources: {
                        visual: 'See a tutorial on how to use Confusion Matrix for classification models.',
                        reading: 'Read about the concept of Cross-Validation in model training.',
                        kinesthetic: 'Split your data into training and testing sets and evaluate your model\'s performance.'
                    }
                }
            ]
        },
        'ux_ui': {
            title: 'UX/UI Design Fundamentals',
            path: [
                {
                    title: 'Module 1: Principles of User Experience (UX)',
                    description: 'Learn about user research, personas, user flows, and information architecture.',
                    resources: {
                        visual: 'Watch videos from the Nielsen Norman Group on UX concepts.',
                        reading: 'Read "The Design of Everyday Things" by Don Norman.',
                        kinesthetic: 'Conduct a simple usability test on a popular app with a friend and take notes.'
                    }
                },
                {
                    title: 'Module 2: UI Design and Visual Principles',
                    description: 'Master the fundamentals of visual design, including color theory, typography, layout, and hierarchy.',
                    resources: {
                        visual: 'Browse websites like Dribbble and Behance for UI inspiration.',
                        reading: 'Read Google\'s Material Design guidelines to understand a real-world design system.',
                        kinesthetic: 'Recreate the UI of your favorite app using a design tool like Figma or Sketch.'
                    }
                },
                {
                    title: 'Module 3: Prototyping and Wireframing',
                    description: 'Learn to create low-fidelity and high-fidelity prototypes to test and communicate your design ideas.',
                    resources: {
                        visual: 'Follow a Figma tutorial on how to create an interactive prototype from static screens.',
                        reading: 'Read an article on the differences between wireframes, mockups, and prototypes.',
                        kinesthetic: 'Create a complete multi-screen interactive prototype for a simple mobile app idea.'
                    }
                }
            ]
        },
        'cloud_aws': {
            title: 'Cloud Computing with AWS',
            path: [
                {
                    title: 'Module 1: Cloud Concepts & AWS IAM',
                    description: 'Understand IaaS, PaaS, SaaS and core cloud concepts. Learn about AWS Identity and Access Management (IAM).',
                    resources: {
                        visual: 'Watch the "AWS in 10 minutes" video on YouTube.',
                        reading: 'Read the AWS overview on "What is Cloud Computing?".',
                        kinesthetic: 'Create a free tier AWS account and set up a new IAM user with specific permissions.'
                    }
                },
                {
                    title: 'Module 2: Core Compute and Storage Services',
                    description: 'Get hands-on with EC2 (virtual servers) and S3 (object storage), two fundamental AWS services.',
                    resources: {
                        visual: 'Follow a tutorial to launch your first EC2 Linux instance.',
                        reading: 'Read the S3 documentation on bucket policies and object versioning.',
                        kinesthetic: 'Launch an EC2 instance, SSH into it, and upload a file to an S3 bucket from the instance.'
                    }
                },
                {
                    title: 'Module 3: Introduction to Serverless',
                    description: 'Discover the power of serverless computing with AWS Lambda and create a simple function.',
                    resources: {
                        visual: 'Watch a video explaining what AWS Lambda is and its benefits.',
                        reading: 'Read the AWS guide on "Building a Serverless Web Application".',
                        kinesthetic: 'Create a simple "Hello World" Lambda function that triggers via an API Gateway endpoint.'
                    }
                }
            ]
        },
        'cybersecurity': {
            title: 'Cybersecurity Fundamentals',
            path: [
                {
                    title: 'Module 1: The CIA Triad & Common Threats',
                    description: 'Learn the core principles of Confidentiality, Integrity, and Availability, and recognize common threats like phishing and malware.',
                    resources: {
                        visual: 'Watch a Professor Messer video on CompTIA Security+ core concepts.',
                        reading: 'Read the OWASP Top 10 list of web application security risks.',
                        kinesthetic: 'Use an online tool to check the strength of your common passwords.'
                    }
                },
                {
                    title: 'Module 2: Network & Defensive Security',
                    description: 'Understand basic networking concepts like firewalls, VPNs, and the importance of encryption.',
                    resources: {
                        visual: 'View a visual explanation of how a firewall works.',
                        reading: 'Read about the differences between symmetric and asymmetric encryption.',
                        kinesthetic: 'Complete the introductory networking modules on a platform like TryHackMe.'
                    }
                },
                {
                    title: 'Module 3: Introduction to Ethical Hacking',
                    description: 'Discover the mindset and phases of ethical hacking, from reconnaissance to covering tracks.',
                    resources: {
                        visual: 'Watch a documentary or talk about the life of a penetration tester.',
                        reading: 'Read an article on the 5 phases of hacking.',
                        kinesthetic: 'Set up a Kali Linux virtual machine to explore the tools available (do not use on networks you don\'t own).'
                    }
                }
            ]
        },
        'devops': {
            title: 'Introduction to DevOps',
            path: [
                {
                    title: 'Module 1: DevOps Culture & Version Control with Git',
                    description: 'Understand the DevOps philosophy of collaboration and automation. Master Git and GitHub for source code management.',
                    resources: {
                        visual: 'Watch a video explaining the DevOps "infinite loop" diagram.',
                        reading: 'Read the first two chapters of "The Phoenix Project".',
                        kinesthetic: 'Create a GitHub repository, clone it, make a change, commit, and push it back.'
                    }
                },
                {
                    title: 'Module 2: Containerization with Docker',
                    description: 'Learn how to package applications and their dependencies into portable containers using Docker.',
                    resources: {
                        visual: 'Follow the "Docker for Beginners" tutorial on YouTube.',
                        reading: 'Read the Docker overview on what a container is.',
                        kinesthetic: 'Write a simple Dockerfile for a Node.js or Python app, build the image, and run the container.'
                    }
                },
                {
                    title: 'Module 3: CI/CD with GitHub Actions',
                    description: 'Learn the basics of Continuous Integration and Continuous Deployment by building a simple automated workflow.',
                    resources: {
                        visual: 'Watch the official GitHub introduction to GitHub Actions.',
                        reading: 'Read the GitHub Actions documentation on core concepts.',
                        kinesthetic: 'Create a simple GitHub Actions workflow that automatically runs tests when you push code.'
                    }
                }
            ]
        },
        'mobile_dev': {
            title: 'Mobile App Development with React Native',
            path: [
                {
                    title: 'Module 1: React & JavaScript Foundations',
                    description: 'Refresh your knowledge of modern JavaScript (ES6+) and the core concepts of React (components, state, props).',
                    resources: {
                        visual: 'Watch a crash course video on React basics.',
                        reading: 'Review the main concepts on the official React documentation website.',
                        kinesthetic: 'Build a simple web-based counter or to-do list using React on CodeSandbox.'
                    }
                },
                {
                    title: 'Module 2: React Native & Expo Go',
                    description: 'Set up your development environment with Expo and learn the basic React Native components and styling.',
                    resources: {
                        visual: 'Follow a "Getting Started with Expo Go" tutorial to run an app on your phone.',
                        reading: 'Read the React Native documentation on Core Components and Styling.',
                        kinesthetic: 'Create a new Expo project and build a simple "Hello World" screen with some text and a button.'
                    }
                },
                {
                    title: 'Module 3: Navigation and Lists',
                    description: 'Learn how to navigate between different screens and display scrollable lists of data.',
                    resources: {
                        visual: 'Watch a tutorial on setting up React Navigation (Stack Navigator).',
                        reading: 'Read the documentation for the FlatList component.',
                        kinesthetic: 'Build a two-screen app where the first screen has a list of items, and tapping an item navigates to a details screen.'
                    }
                }
            ]
        },
        'gen_ai': {
            title: 'Generative AI & LLM Application Development',
            path: [
                {
                    title: 'Module 1: Intro to LLMs & Prompt Engineering',
                    description: 'Understand what Large Language Models (LLMs) are and learn the art of writing effective prompts to get desired outputs.',
                    resources: {
                        visual: 'Watch a 3Blue1Brown or StatQuest video for an intuitive explanation of transformers/attention.',
                        reading: 'Read OpenAI\'s guide on prompt engineering best practices.',
                        kinesthetic: 'Experiment with ChatGPT or Google Gemini, trying different prompting techniques (e.g., few-shot, chain-of-thought).'
                    }
                },
                {
                    title: 'Module 2: Using LLM APIs (OpenAI/Gemini)',
                    description: 'Learn how to programmatically interact with a powerful LLM by making API calls from your code.',
                    resources: {
                        visual: 'Follow a video tutorial on making your first OpenAI or Google Gemini API call in Python/Node.js.',
                        reading: 'Read the API reference documentation for the model you choose.',
                        kinesthetic: 'Write a simple script that takes user input from the command line and prints the LLM\'s response.'
                    }
                },
                {
                    title: 'Module 3: Building with LangChain or Streamlit',
                    description: 'Use a framework to simplify building applications on top of LLMs. Create a simple web UI for your AI tool.',
                    resources: {
                        visual: 'Watch a tutorial on building a simple Q&A app with Streamlit and an LLM API.',
                        reading: 'Read the LangChain "Get Started" guide to understand its core concepts.',
                        kinesthetic: 'Build a web application that summarizes a piece of text that a user pastes into a text box.'
                    }
                }
            ]
        }
    };

    /**
     * Simulates an AI generating a learning path.
     */
    function generatePath(goal, level, style) {
        let selectedPath = null;
        const goalLower = goal.toLowerCase();

        // **UPDATED**: Keyword detection logic now includes all new courses
        if (goalLower.includes('python') || goalLower.includes('data science')) {
            selectedPath = learningData['python'];
        } else if (goalLower.includes('web') || goalLower.includes('frontend') || goalLower.includes('backend')) {
            selectedPath = learningData['web'];
        } else if (goalLower.includes('machine learning') || goalLower.includes('ml')) {
            selectedPath = learningData['machine_learning'];
        } else if (goalLower.includes('ux') || goalLower.includes('ui') || goalLower.includes('design')) {
            selectedPath = learningData['ux_ui'];
        } else if (goalLower.includes('cloud') || goalLower.includes('aws')) {
            selectedPath = learningData['cloud_aws'];
        } else if (goalLower.includes('cyber') || goalLower.includes('security')) {
            selectedPath = learningData['cybersecurity'];
        } else if (goalLower.includes('devops')) {
            selectedPath = learningData['devops'];
        } else if (goalLower.includes('mobile') || goalLower.includes('app') || goalLower.includes('react native')) {
            selectedPath = learningData['mobile_dev'];
        } else if (goalLower.includes('generative ai') || goalLower.includes('llm') || goalLower.includes('genai')) {
            selectedPath = learningData['gen_ai'];
        } else {
            return { error: `Sorry, we don't have a pre-defined path for "${goal}". Try topics like: Python, Web Development, Cloud, Cybersecurity, DevOps, Mobile App, or Generative AI.` };
        }

        let modules = [...selectedPath.path];

        // Adjust path based on skill level
        if (level === 'intermediate') {
            modules.shift(); // Skip the first (beginner) module
        } else if (level === 'advanced') {
            if (modules.length > 2) {
                modules.shift();
                modules.shift(); 
            } else if (modules.length === 2) {
                modules.shift();
            }
        }

        // Format the output with style-specific resources
        const formattedModules = modules.map(module => ({
            title: module.title,
            description: module.description,
            resource: module.resources[style]
        }));
        
        return {
            title: selectedPath.title,
            modules: formattedModules
        };
    }

    /**
     * Renders the generated learning path to the DOM.
     */
    function displayPath(pathData) {
        pathContainer.innerHTML = ''; // Clear previous results

        if (pathData.error) {
            pathContainer.innerHTML = `<p class="error" style="color: red; text-align: center;">${pathData.error}</p>`;
            return;
        }
        
        if (pathData.modules.length === 0) {
            pathContainer.innerHTML = `<p class="info" style="text-align: center;">You're at an advanced level! Consider exploring specialized topics or contributing to open-source projects in the field of ${pathData.title}.</p>`;
            return;
        }

        const header = document.createElement('h2');
        header.textContent = `Your Learning Path for: ${pathData.title}`;
        pathContainer.appendChild(header);

        pathData.modules.forEach((module, index) => {
            const moduleDiv = document.createElement('div');
            moduleDiv.className = 'path-module';
            moduleDiv.style.animationDelay = `${index * 0.15}s`;

            moduleDiv.innerHTML = `
                <h3>${module.title}</h3>
                <p>${module.description}</p>
                <ul>
                    <li><strong>Suggested Activity:</strong> ${module.resource}</li>
                </ul>
            `;
            pathContainer.appendChild(moduleDiv);
        });
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const goal = document.getElementById('goal').value;
        const level = document.getElementById('level').value;
        const style = document.getElementById('style').value;
        
        pathContainer.innerHTML = 'Generating your personalized path...';

        setTimeout(() => {
            const path = generatePath(goal, level, style);
            displayPath(path);
        }, 1000);
    });
});