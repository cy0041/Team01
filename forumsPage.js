// we access the logged in user from session storage
const full_username = sessionStorage.getItem('loggedInUser')
// extract the name by splitting string into 2 elements in an array, where we split with all characters containing @ (here we only have 1 @ symbol)
// then we take the first elemnt of the array (from first character up until and excluding the @ symbol)
const username = full_username.split('@')[0]


// data Structure which is hardcoded with fixed dummy data using AI
const state = {
    currentUser: username,
    currentFilter: 'all',
    currentSubcategory: null,
    searchQuery: '',
    yourPosts: [
        {
            id: 1,
            title: 'How to optimize React performance?',
            category: 'technical',
            subcategory: 'programming',
            content: 'I am experiencing performance issues with my React application when rendering large lists. What are the best practices?',
            author: username,
            timestamp: '2 hours ago',
            answerCount: 3,
            expanded: false,
            answers: [
                { id: 1001, author: 'John Martinez', content: 'Try using React.memo and useMemo for expensive computations. Also consider virtualization for long lists.', timestamp: '1 hour ago' },
                { id: 1002, author: 'Sarah Chen', content: 'Implement code splitting and lazy loading. You can also use the Profiler API to identify bottlenecks.', timestamp: '45 minutes ago' },
                { id: 1003, author: 'Michael Thompson', content: 'Consider using windowing libraries like react-window or react-virtualized for large lists.', timestamp: '30 minutes ago' }
            ]
        },
        {
            id: 2,
            title: 'Budget allocation for department',
            category: 'non-technical',
            subcategory: 'financial',
            content: 'What is the recommended process for submitting a budget proposal for Q4?',
            author: username,
            timestamp: '1 day ago',
            answerCount: 2,
            expanded: false,
            answers: [
                { id: 1004, author: 'Emily Rodriguez', content: 'Please submit your proposal using the Q4 budget template available in the shared drive by the 15th of the month.', timestamp: '18 hours ago' },
                { id: 1005, author: 'David Wilson', content: 'Make sure to include justification for any increases and align with departmental goals.', timestamp: '12 hours ago' }
            ]
        }
    ],
    publicPosts: [
         { // added this post from 'yourPosts' to 'publicPosts' to maintain consistency
            id: 1,
            title: 'How to optimize React performance?',
            category: 'technical',
            subcategory: 'programming',
            content: 'I am experiencing performance issues with my React application when rendering large lists. What are the best practices?',
            author: username,
            timestamp: '2 hours ago',
            answerCount: 3,
            expanded: false,
            answers: [
                { id: 1001, author: 'John Martinez', content: 'Try using React.memo and useMemo for expensive computations. Also consider virtualization for long lists.', timestamp: '1 hour ago' },
                { id: 1002, author: 'Sarah Chen', content: 'Implement code splitting and lazy loading. You can also use the Profiler API to identify bottlenecks.', timestamp: '45 minutes ago' },
                { id: 1003, author: 'Michael Thompson', content: 'Consider using windowing libraries like react-window or react-virtualized for large lists.', timestamp: '30 minutes ago' }
            ]
        },
        {
            id: 2,
            title: 'Budget allocation for department',
            category: 'non-technical',
            subcategory: 'financial',
            content: 'What is the recommended process for submitting a budget proposal for Q4?',
            author: username,
            timestamp: '1 day ago',
            answerCount: 2,
            expanded: false,
            answers: [
                { id: 1004, author: 'Emily Rodriguez', content: 'Please submit your proposal using the Q4 budget template available in the shared drive by the 15th of the month.', timestamp: '18 hours ago' },
                { id: 1005, author: 'David Wilson', content: 'Make sure to include justification for any increases and align with departmental goals.', timestamp: '12 hours ago' }
            ]
        },
        {
            id: 101,
            title: 'Best practices for database indexing',
            category: 'technical',
            subcategory: 'programming',
            content: 'Looking for advice on when to use composite indexes versus single column indexes.',
            author: 'James Anderson',
            timestamp: '3 hours ago',
            answerCount: 2, 
            expanded: false,
            answers: [
                { id: 1006, author: 'Rachel Kim', content: 'Use composite indexes when you frequently query multiple columns together. Monitor query performance and adjust accordingly.', timestamp: '2 hours ago' },
                { id: 1007, author: 'Thomas Brown', content: 'Consider the trade-off between read and write performance. Too many indexes can slow down inserts and updates.', timestamp: '1 hour ago' }
            ]
        },
        {
            id: 102,
            title: 'Printer connection issues',
            category: 'technical',
            subcategory: 'hardware',
            content: 'The office printer keeps disconnecting from the network. Any troubleshooting steps?',
            author: 'Linda Garcia',
            timestamp: '5 hours ago',
            answerCount: 2, 
            expanded: false,
            answers: [
                { id: 1008, author: 'Kevin Lee', content: 'Try assigning a static IP address to the printer instead of using DHCP. This often resolves connection issues.', timestamp: '4 hours ago' },
                { id: 1009, author: 'Amanda White', content: 'Update the printer firmware and check if the router needs a restart.', timestamp: '3 hours ago' }
            ]
        },
        {
            id: 103,
            title: 'Excel formulas for financial reporting',
            category: 'technical',
            subcategory: 'productivity',
            content: 'Need help with VLOOKUP and SUMIF for quarterly reports.',
            author: 'Robert Taylor',
            timestamp: '1 day ago',
            answerCount: 2, 
            expanded: false,
            answers: [
                { id: 1010, author: 'Jessica Moore', content: 'XLOOKUP is the modern replacement for VLOOKUP. It\'s more flexible and easier to use.', timestamp: '20 hours ago' },
                { id: 1011, author: 'Daniel Jackson', content: 'For complex scenarios, consider using INDEX-MATCH combination instead of VLOOKUP.', timestamp: '18 hours ago' }
            ]
        },
        {
            id: 104,
            title: 'Leave request approval process',
            category: 'non-technical',
            subcategory: 'admin',
            content: 'How long does it typically take for leave requests to be approved?',
            author: 'Michelle Davis',
            timestamp: '6 hours ago',
            answerCount: 2,
            expanded: false,
            answers: [
                { id: 1012, author: 'Patricia Miller', content: 'Standard leave requests are processed within 48 hours. Emergency leaves are approved same-day.', timestamp: '5 hours ago' },
                { id: 1013, author: 'Christopher Wilson', content: 'Make sure to submit at least 2 weeks in advance for planned vacations.', timestamp: '4 hours ago' }
            ]
        },
        {
            id: 105,
            title: 'Remote work equipment setup',
            category: 'non-technical',
            subcategory: 'miscellaneous',
            content: 'What equipment can I request for my home office setup?',
            author: 'Steven Harris',
            timestamp: '2 days ago',
            answerCount: 2, 
            expanded: false,
            answers: [
                { id: 1014, author: 'Jennifer Clark', content: 'You can request a monitor, keyboard, mouse, and headset. Submit a ticket through the IT portal.', timestamp: '1 day ago' },
                { id: 1015, author: 'Andrew Lewis', content: 'We also provide ergonomic chairs and desk accessories. Check the employee handbook for details.', timestamp: '1 day ago' }
            ]
        }
    ],
    // again hard coded dummy values housing the FAQs
    faqItems: [
        { id: 1, question: 'How do I reset my password?', answer: 'Click on the "Forgot Password" link on the login page. You will receive an email with instructions to reset your password. If you don\'t receive the email within 10 minutes, check your spam folder or contact IT support.', expanded: false },
        { id: 2, question: 'What are the working hours?', answer: 'Standard working hours are Monday to Friday, 9:00 AM to 5:00 PM. Flexible working arrangements are available upon manager approval. Remote workers should maintain availability during core hours (10:00 AM - 3:00 PM).', expanded: false },
        { id: 3, question: 'How do I submit an expense report?', answer: 'Log into the finance portal and navigate to "Expense Reports". Upload receipts and fill out the expense form. Reports must be submitted within 30 days of the expense date. Approvals typically take 3-5 business days.', expanded: false },
        { id: 4, question: 'Where can I find company policies?', answer: 'All company policies are available in the employee handbook on the intranet. Navigate to Resources > Employee Handbook. The handbook is updated annually, and you will be notified of any significant changes.', expanded: false },
        { id: 5, question: 'How do I book a meeting room?', answer: 'Use the room booking system accessible through the company calendar. Select your desired date and time, choose an available room, and send the meeting invite. Conference rooms can be booked up to 2 weeks in advance.', expanded: false },
        { id: 6, question: 'What software licenses are available?', answer: 'We provide licenses for Microsoft Office 365, Adobe Creative Cloud, and various development tools. To request a new license, submit a ticket to IT support with justification. Approval is typically within 24 hours.', expanded: false }
    ]
};

const subcategories = {
    technical: ['programming', 'productivity', 'hardware'],
    'non-technical': ['admin', 'financial', 'miscellaneous']
};

// this variable is declared in the global scope (outside any function)
// it will hold the Bootstrap modal *object* so other functions can *control* it (e.g., to call .show() or .hide()).
let newPostModal; 

// this function runs once when the page loads to set up listeners and draw the initial content.
function init() {
    
    // get the Bootstrap modal object from the HTML (it runs once on page load)
    // this prepares the modal, it doesn't show it yet.
    newPostModal = new bootstrap.Modal(document.getElementById('newPostModal'));
    
    // add event listeners for the "Create Post" modal
    // 1. when the "Submit" button is clicked, run the handlePostSubmit function.
    document.getElementById('submitPostButton').addEventListener('click', handlePostSubmit);
    
    // 2. when the "Technical" or "Non-Technical" radio buttons are changed, runs the updateSubcategoryOptions function.
    document.querySelectorAll('input[name="postCategory"]').forEach(radio => {
        radio.addEventListener('change', updateSubcategoryOptions);
    });

    // runs this function once now to populate the subcategory dropdown with the default options.
    updateSubcategoryOptions();

    // draw the initial posts and FAQ content to the screen
    renderYourPosts();
    renderPublicPosts();
    renderFAQ();
}

// render 'YourPosts' section
function renderYourPosts() {
    const container = document.getElementById('your-posts-container');
    if (state.yourPosts.length === 0) {
        container.innerHTML = '<p class="text-muted text-center py-3">No posts yet. Create your first post!</p>';
        return;
    }

    //inserts into the container variable the 'your posts' and ones being expanded as a conditional 
    container.innerHTML = state.yourPosts.map(post => `
        <div class="post-card ${post.expanded ? 'expanded' : ''}">
                <div class="d-flex justify-content-between align-items-start">
                     <div class="flex-grow-1" onclick="togglePost(${post.id}, 'your')" ${post.expanded ? '' : 'style="cursor: pointer;"'}>
                         <div class="d-flex justify-content-between align-items-start mb-2">
                            <h6 class="fw-bold mb-0 flex-grow-1">${post.title}</h6>
                            <span class="badge badge-${post.category} ms-2">${post.category}</span>
                        </div>
                        <p class="text-muted small mb-2">${post.content}</p>
                        <div class="d-flex justify-content-between align-items-center small text-muted">
                            <span>${post.timestamp}</span>

                            <div class="d-flex align-items-center">
                                <span class="fw-semibold me-3">${post.answerCount} ${post.answerCount === 1 ? 'answer' : 'answers'}</span>
                                <button class="btn btn-sm btn-outline-danger" style="min-height: 30px;" onclick="deletePost(${post.id})" title="Delete Post">
                                    <i class="bi bi-trash-fill"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                            

            </div>
            ${post.expanded ? `
                <div class="mt-3 pt-3 border-top">
                    <h6 class="fw-bold mb-3">Answers:</h6>
                    ${post.answers.map(answer => `
                        <div class="answer-item">
                            <div class="d-flex justify-content-between align-items-start mb-2">
                                <div>
                                    <span class="fw-semibold text-primary">${answer.author}</span>
                                    ${answer.author === state.currentUser ? `
                                        <button class="btn btn-sm btn-outline-danger ms-2 py-0 px-1" onclick="deleteAnswer(${post.id}, ${answer.id})" title="Delete Answer">
                                            <i class="bi bi-trash-fill"></i>
                                        </button>
                                    ` : ''}
                                </div>
                                <span class="text-muted small">${answer.timestamp}</span>
                            </div>
                            <p class="small mb-0">${answer.content}</p>
                        </div>
                    `).join('')}
                </div>
            ` : ''}
        </div>
    `).join('');
}

// rendes the  public posts
function renderPublicPosts() {
    const container = document.getElementById('public-posts-container');
    // state class centralises the storage of most data here like the public posts etc.
    // conditions filtering through posts
    let filteredPosts = state.publicPosts;

    if (state.currentFilter !== 'all') {
        filteredPosts = filteredPosts.filter(post => post.category === state.currentFilter);
    }

    if (state.currentSubcategory) {
        filteredPosts = filteredPosts.filter(post => post.subcategory === state.currentSubcategory);
    }

    if (state.searchQuery) {
        const query = state.searchQuery.toLowerCase();
        filteredPosts = filteredPosts.filter(post => 
            post.title.toLowerCase().includes(query) || 
            post.content.toLowerCase().includes(query)
        );
    }

    if (filteredPosts.length === 0) {
        container.innerHTML = '<p class="text-center text-muted py-4">No posts found matching your criteria.</p>';
        return;
    }

    //inserts into the container variable the public posts with conditions on expanded posts and its contents  
    container.innerHTML = filteredPosts.map(post => `
        <div class="post-card ${post.expanded ? 'expanded' : ''}">
            <div class="d-flex justify-content-between align-items-start">
                <div class="flex-grow-1" onclick="togglePost(${post.id}, 'public')" ${post.expanded ? '' : 'style="cursor: pointer;"'}>
                    <div class="d-flex justify-content-between align-items-start mb-2">
                        <h6 class="fw-bold mb-0 flex-grow-1">${post.title}</h6>
                        <div class="d-flex gap-2">
                            <span class="badge badge-${post.category}">${post.category}</span>
                            <span class="badge bg-secondary">${post.subcategory}</span>
                        </div>
                    </div>
                    <p class="text-muted small mb-2">${post.content}</p>
                    <div class="d-flex justify-content-between align-items-center small text-muted">
                        <span>Posted by <span class="fw-semibold">${post.author}</span> • ${post.timestamp}</span>
                        <div class="d-flex align-items-center">
                            <span class="fw-semibold">${post.answerCount} ${post.answerCount === 1 ? 'answer' : 'answers'}</span>
                            ${post.author === state.currentUser ? `
                                <button class="btn btn-sm btn-outline-danger ms-2" style="min-height: 30px;" onclick="deletePost(${post.id})" title="Delete Post">
                                    <i class="bi bi-trash-fill"></i>
                                </button>
                            ` : ''}
                        </div>
                    </div>
                </div>
            </div>
            ${post.expanded ? `
                <div class="mt-3 pt-3 border-top">
                    <h6 class="fw-bold mb-3">Answers:</h6>
                    ${post.answers.map(answer => `
                        <div class="answer-item">
                            <div class="d-flex justify-content-between align-items-start mb-2">
                                <div>
                                    <span class="fw-semibold text-primary">${answer.author}</span>
                                    </div>
                                <div class="d-flex align-items-center">
                                    <span class="text-muted small">${answer.timestamp}</span>
                                    </div>
                            </div>
                            
                            <p class="small mb-0">${answer.content}</p>

                            ${answer.author === state.currentUser ? `
                                <button class="btn btn-sm btn-outline-danger py-0 px-1 answer-delete-btn" onclick="deleteAnswer(${post.id}, ${answer.id})" title="Delete Answer">
                                    <i class="bi bi-trash-fill"></i>
                                </button>
                            ` : ''}
                        </div>
                    `).join('')}
                    <div class="answer-form">
                        <textarea id="answer-input-${post.id}" placeholder="Write your answer..." class="form-control mb-2" rows="3"></textarea>
                        <button onclick="submitAnswer(${post.id})" class="btn btn-primary btn-sm">
                            Submit Answer
                        </button>
                    </div>
                </div>
            ` : ''}
        </div>
    `).join('');
}

// Render FAQ
function renderFAQ() {
    const container = document.getElementById('faq-container');
    container.innerHTML = state.faqItems.map(faq => `
        <div class="faq-item">
            <div class="faq-header" onclick="toggleFAQ(${faq.id})">
                <h6 class="fw-semibold mb-0">${faq.question}</h6>
                <i class="bi bi-chevron-${faq.expanded ? 'up' : 'down'}"></i>
            </div>
            ${faq.expanded ? `
                <div class="faq-body">
                    <p class="text-muted small mb-0">${faq.answer}</p>
                </div>
            ` : ''}
        </div>
    `).join('');
}

// Toggle Post Expansion
function togglePost(postId, type) {
    const posts = type === 'your' ? state.yourPosts : state.publicPosts;
    const post = posts.find(p => p.id === postId);
    if (post) {
        post.expanded = !post.expanded;
        if (type === 'your') {
            renderYourPosts();
        } else {
            renderPublicPosts();
        }
    }
}

// Toggle FAQ
function toggleFAQ(faqId) {
    const faq = state.faqItems.find(f => f.id === faqId);
    if (faq) {
        faq.expanded = !faq.expanded;
        renderFAQ();
    }
}

// Submit Answer
function submitAnswer(postId) {
    const textarea = document.getElementById(`answer-input-${postId}`);
    const content = textarea.value.trim();
    
    if (!content) {
        // Using alert here is fine for simple validation feedback
        alert('Please enter an answer before submitting.');
        return;
    }

    const newAnswer = {
        id: Date.now(), // MODIFIED: Added unique ID
        author: state.currentUser,
        content: content,
        timestamp: 'Just now'
    };

    // Update in both lists
    const postPublic = state.publicPosts.find(p => p.id === postId);
    if (postPublic) {
        postPublic.answers.push(newAnswer);
        postPublic.answerCount = postPublic.answers.length;
    }
    
    const postYour = state.yourPosts.find(p => p.id === postId);
    if (postYour) {
        postYour.answers.push(newAnswer);
        postYour.answerCount = postYour.answers.length;
    }
    renderPublicPosts();
    renderYourPosts();
    
    // Clear textarea
    textarea.value = '';
} 


//  Delete Post
function deletePost(postId) {
    if (!confirm('Are you sure you want to delete this post? This action cannot be undone.')) {
        return;
    }

    state.yourPosts = state.yourPosts.filter(p => p.id !== postId);
    state.publicPosts = state.publicPosts.filter(p => p.id !== postId);

    renderYourPosts();
    renderPublicPosts();
}

//  Delete Answer
function deleteAnswer(postId, answerId) {
    if (!confirm('Are you sure you want to delete this answer?')) {
        return;
    }

    let postUpdated = false;

    // Find and update in public posts
    const postPublic = state.publicPosts.find(p => p.id === postId);
    if (postPublic) {
        const initialAnswerCount = postPublic.answers.length;
        postPublic.answers = postPublic.answers.filter(a => a.id !== answerId);
        postPublic.answerCount = postPublic.answers.length;
        if (initialAnswerCount !== postPublic.answerCount) {
            postUpdated = true;
        }
    }

    // Find and update in your posts
    const postYour = state.yourPosts.find(p => p.id === postId);
    if (postYour) {
        const initialAnswerCount = postYour.answers.length;
        postYour.answers = postYour.answers.filter(a => a.id !== answerId);
        postYour.answerCount = postYour.answers.length;
         if (initialAnswerCount !== postYour.answerCount) {
            postUpdated = true;
        }
    }

    if (postUpdated) {
        renderPublicPosts();
        renderYourPosts();
    }
}


// Filter Posts
function filterPosts(category) {
    state.currentFilter = category;
    state.currentSubcategory = null;

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    const subcategoryFilter = document.getElementById('subcategory-filter');
    const subcategoryButtons = document.getElementById('subcategory-buttons');

    if (category === 'all') {
        subcategoryFilter.classList.add('d-none');
    } else {
        subcategoryFilter.classList.remove('d-none');
        const subs = subcategories[category] || [];
        subcategoryButtons.innerHTML = subs.map(sub => 
            `<button onclick="filterSubcategory('${sub}')" class="btn btn-sm btn-outline-secondary">${sub.charAt(0).toUpperCase() + sub.slice(1)}</button>`
        ).join('');
    }

    renderPublicPosts();
}

// Filter by Subcategory
function filterSubcategory(subcategory) {
    state.currentSubcategory = subcategory;

    document.querySelectorAll('#subcategory-buttons button').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase() === subcategory) {
            btn.classList.add('active');
        }
    });

    renderPublicPosts();
}

// Search Posts
function searchPosts() {
    state.searchQuery = document.getElementById('search-input').value;
    renderPublicPosts();
}


//Populates the subcategory dropdown in the modal
function updateSubcategoryOptions() {
    const selectedCategory = document.querySelector('input[name="postCategory"]:checked').value;
    const subcategorySelect = document.getElementById('postSubcategory');
    const subs = subcategories[selectedCategory] || [];
    
    subcategorySelect.innerHTML = subs.map(sub => 
        `<option value="${sub}">${sub.charAt(0).toUpperCase() + sub.slice(1)}</option>`
    ).join('');
}

//Opens the new post modal
function openNewPostModal() {
    // Reset form
    const form = document.getElementById('newPostForm');
    form.reset();
    form.classList.remove('was-validated');
    updateSubcategoryOptions(); // Reset to default
    
    // Show the modal
    newPostModal.show();
}

// Handles the new post form submission
// Handles the new post form submission
function handlePostSubmit() {
    const form = document.getElementById('newPostForm');
    const titleInput = document.getElementById('postTitle');
    const contentInput = document.getElementById('postContent');
    const subcategorySelect = document.getElementById('postSubcategory');

    // Bootstrap validation
    if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return;
    }

    const title = titleInput.value;
    const content = contentInput.value;
    const category = document.querySelector('input[name="postCategory"]:checked').value;
    const subcategory = subcategorySelect.value;
    const newPostId = Date.now(); // Create one ID to link them

    // 1. Create the post for 'yourPosts'
    const newPostForYour = {
        id: newPostId,
        title,
        category,
        subcategory,
        content,
        author: state.currentUser,
        timestamp: 'Just now',
        answerCount: 0,
        expanded: false,
        answers: [] // This is a new, separate array
    };

    // 2. Create an identical-but-separate post for 'publicPosts'
    const newPostForPublic = {
        id: newPostId,
        title,
        category,
        subcategory,
        content,
        author: state.currentUser,
        timestamp: 'Just now',
        answerCount: 0,
        expanded: false,
        answers: [] // This is a *different* new, separate array
    };

    // Add each separate object to its respective array
    state.yourPosts.unshift(newPostForYour);
    state.publicPosts.unshift(newPostForPublic);
    
    // --- END OF FIX ---
    
    renderYourPosts();
    renderPublicPosts();
    
    newPostModal.hide();
}



// Text Size Toggle
const savedTextSize = localStorage.getItem('textSize')
let currentTextSize = savedTextSize || 'regular';

document.getElementById('textEnlargeToggle').addEventListener('click', function() {
    if (currentTextSize === 'regular') {
        applyTextSize('enlarged') 
    } else {
        applyTextSize('regular') 
    }
});

function applyTextSize(size) 
{
    localStorage.setItem('textSize', size)
    currentTextSize = size;

    const icon = document.getElementById('textSizeIcon')

    if (size == 'enlarged') {
        document.body.style.fontSize = '1.3em';
        icon.className = 'bi bi-dash-lg';
    } else if (size === 'regular') {
        document.body.style.fontSize = '';
        icon.className = 'bi bi-plus-lg';
    }
}

applyTextSize(currentTextSize)

document.getElementById('darkModeToggle').addEventListener('change', function() 
{
    if (this.checked) {
        applyTheme('dark')
    } else {
        applyTheme('light')
    }
});

function applyTheme (theme)
{
    localStorage.setItem('theme', theme)

    const toggle = document.getElementById('darkModeToggle')
    const icon = document.getElementById('modeIcon')

    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        icon.className = 'bi bi-moon-fill';
        toggle.checked = true;
    } else {
        document.body.classList.remove('dark-mode');
        icon.className = 'bi bi-sun-fill';
        toggle.checked = false;
    }
}

const savedTheme = localStorage.getItem('theme')
applyTheme(savedTheme || 'light')

//Logout Button
document.getElementById('logoutButton').addEventListener('click', function() {
    window.location.href = 'login.html';
});

//change the navbar name

const welcomeMessageElement = document.getElementById('welcomeMessage');

const loggedInUser = sessionStorage.getItem('loggedInUser');
const newText = `Welcome, ${loggedInUser.slice(0,-14)} (${sessionStorage.getItem('userRole')})`;

welcomeMessageElement.textContent = newText;

// Initialize on load
init();




