export abstract class AbstractStorageService {

  protected abstract prefix: string;

  protected getItem(): string | null {
    const item: string | null = localStorage.getItem(this.prefix);
    if (!item) return item;
    return JSON.parse(item);
  }

  protected setItem(data: any): void {
    const stringifiedData = JSON.stringify(data)
    return localStorage.setItem(this.prefix, stringifiedData);
  }

  protected deleteItem(): void {
    localStorage.removeItem(this.prefix);
  }
}
