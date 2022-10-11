import { StringTransform } from './string-transformation'

export abstract class LineTransform extends StringTransform {
  private unfinishedLine = ''

  abstract transformLine(line: string): void

  transformString(newText: string): void {
    const text = this.unfinishedLine + newText
    let start = 0
    let end = 0

    while (true) {
      start = end
      end = text.indexOf('\n', start) + 1

      if (start < end) {
        this.transformLine(text.substring(start, end))
      } else {
        this.unfinishedLine = text.substring(start)
        break
      }
    }
  }

  _flush(callback: Function) {
    if (this.unfinishedLine) {
      this.transformLine(this.unfinishedLine)
    }

    callback()
  }
}
