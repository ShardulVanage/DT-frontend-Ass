const sidebarTemplate = document.createElement("template");

sidebarTemplate.innerHTML = `
<div class="sidebar">
    <div class="sidebar-title-con">
        <div class="sidebar-title">Journey Board</div>
        <img
            class="sidebar-expand-icon"
            src="/assets/rightArrowIcon.svg"
            loading="lazy"
        />
    </div>
    <div class="sidebar-collapsed-content"></div>
    <div class="sidebar-content">
        <div class="sidebar-content-title">Explore the world of management</div>
        <ul class="sidebar-content-con">
            <li>Technical Project Management</li>
            <li>Threadbuild</li>
            <li>Structure your pointers</li>
            <li>4SA Method</li>
        </ul>
    </div>
</div>
<style>
    .sidebar {
        position: fixed;
        font-size: 16px;
        letter-spacing: 0.32px;
        display: flex;
        flex-direction: column;
        width: 130px;
        max-width: 400px;
        height: 70vh;
        background-color: #fdfdfd;
        border-radius: 0px 20px 20px 20px;
        box-shadow: 1px 10px 10px 1px rgba(0, 0, 0, 0.25);
        transition: 0.5s;
        overflow-x: hidden;
        z-index: 100;
    }
    .sidebar-title-con {
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: end;
        gap: 20px;
        width: auto;
        padding: 11px 14px;
        border-radius: 0px 20px 0px 0px;
        color: #fff;
        background-color: #000;
    }
    .sidebar-title {
        display: none;
        flex-basis: auto;
        flex-grow: 1;
    }
    .sidebar-expand-icon {
        aspect-ratio: 1;
        width: 20px;
        padding: 4px;
        background-color: white;
        border-radius: 50%;
    }
    .sidebar-collapsed-content {
        line-height: 1.8rem;
        font-size: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 30px;
        padding: 20px 10px;
        color: var(--primary-color-1);
        border: 1px solid var(--primary-color-1);
        border-radius: 20px;
    }
    .sidebar-content {
        display: none;
        flex-direction: column;
        width: auto;
        padding: 20px;
        color: #000;
    }
    .sidebar-content-title {
        font-weight: 600;
        margin-left: 23px;
    }
    .sidebar-content-title::before {
        content: "\u2022";
        margin-right: 10px;
    }
    .sidebar-content-con {
        font-weight: 400;
    }
    .sidebar-content-con li {
        margin: 8px 0;
        padding-left: 20px;
    }
</style>
`;

class Sidebar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(sidebarTemplate.content.cloneNode(true));

        this.expanded = false;
        this.notificationCount = 1;

        const sidebar = this.shadowRoot.querySelector(".sidebar");
        const sidebarExpandIcon = this.shadowRoot.querySelector("img.sidebar-expand-icon");

        const sidebarTitle = this.shadowRoot.querySelector(".sidebar-title");
        const sidebarCollapsedContent = this.shadowRoot.querySelector("div.sidebar-collapsed-content");
        const sidebarContent = this.shadowRoot.querySelector("div.sidebar-content");

        sidebarCollapsedContent.innerHTML = this.notificationCount;

        sidebarExpandIcon.addEventListener("click", () => {
            sidebar.style.width = sidebar.style.width === "400px" ? "130px" : "400px";
            this.expanded = !this.expanded;
            sidebarExpandIcon.style.transform = this.expanded ? `rotateY(180deg)` : `rotateY(0)`;
            if(this.expanded) {
                sidebarTitle.style.display = "flex";
                sidebarCollapsedContent.style.display = "none";
                sidebarContent.style.display = "flex";
            } else {
                sidebarTitle.style.display = "none";
                sidebarCollapsedContent.style.display = "flex";
                sidebarContent.style.display = "none";
            }
        });
    }
}

customElements.define("krev-sidebar", Sidebar);