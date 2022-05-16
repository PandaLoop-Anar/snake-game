import { base } from "../common/base.js";

export class snake extends base {
  constructor(id, data) {
    super(id, data);
  }

  _renderCubes(list) {
    return list
      .map((cube) => {
        return `
           <div class="cube" style="left: ${cube.left}px; top: ${cube.top}px;"></div>
           `;
      })
      .join("");
  }

  render() {
    const content = this._renderCubes(this.data);
    this.setHtmlContent(content);
  }
}
