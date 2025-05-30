import './style.css'

class LoremBlock extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.innerHTML = /*html*/ `
    <div class="p-5 bg-white shadow-2xl rounded-xl">
        <h3 class="font-bold">${this.title}</h3>
        
        <div class="p-4 mt-5 rounded-lg bg-gray-50">
          <div class="w-full overflow-auto max-h-48 ${this.hasAttribute('scroll-hide') ? 'scrollbar-hide' : ''
      }">

            <div class="space-y-10">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and scrambled it to
                make a type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially
                unchanged.
              </p>

              <p class="inline-block w-screen h-screen">
                It was popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>

          </div>
        </div>
      </div>
    `
  }
}

customElements.define('lorem-block', LoremBlock)
