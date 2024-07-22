const tpmTemplate = document.createElement("template");

tpmTemplate.innerHTML = `
<div class="tpm">
    <div class="tpm-title-con">
        <div class="tpm-title">Technical Project Management</div>
        <button class="info-btn">i</button>
    </div>
    <div class="desc">
        <span class="desc-title">Description:</span>
        <span class="desc-desc">
            Story of Alignment Scope of Agility Specific Accountable Staggering Approach
        </span>
    </div>
    <img
        class="yt-img"
        src="/assets/yt.png"
        loading="lazy"
    />
</div>
<style>
    .tpm {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        max-width: 450px;
        margin: 10px 0;
        border-radius: 15px;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px -4px 4px 0px rgba(0, 0, 0, 0.25);
    }
    .tpm-title-con {
        position: relative;
        text-align: center;
        font-size: 16px;
        letter-spacing: 0.32px;
        width: 100%;
        padding: 14px 0;
        border-radius: 15px 15px 0px 0px;
        background-color: #000;
    }
    .tpm-title {
        font-weight: 600;
        justify-self: center;
        flex-basis: auto;
        flex-grow: 1;
        color: #fff;
    }
    .info-btn {
        position: absolute;
        top: 0;
        right: 0;
        font-size: 1.2rem;
        font-weight: 600;
        margin: 10px 20px;
        padding: 0 8px;
        border-radius: 50%;
        color: #000;
        background-color: #fff;
    }
    .desc {
        font-size: 1rem;
        font-weight: 600;
        letter-spacing: 0.3px;
        margin: 24px 0 0 11px;
    }
    .desc-title {
        font-weight: 600;
    }
    .desc-desc {
        font-weight: 400;
    }
    .yt-img {
        width: 100%;
        margin: 30px 0 80px;
    }
</style>
`;

class TPM extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(tpmTemplate.content.cloneNode(true));
    }
}

customElements.define("krev-tpm", TPM);