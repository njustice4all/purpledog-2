import { ReponseCategory, ResponseItem } from '../interfaces';

class Result {
  static success<T>(res: T) {
    return [null, res] as const;
  }

  static failure(error: Error) {
    return [error, null] as const;
  }
}

class HackerNews {
  private readonly baseUrl = 'https://hacker-news.firebaseio.com/v0';

  async getCategories(category: string | undefined) {
    try {
      const response = await fetch(`${this.baseUrl}/${category}.json`);
      const results = await response.json();
      return Result.success<ReponseCategory>(results);
    } catch (error) {
      return Result.failure(error);
    }
  }

  async getItem(id: string | undefined) {
    try {
      const response = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
      );
      const results = await response.json();
      return Result.success<ResponseItem>(results);
    } catch (error) {
      return Result.failure(error);
    }
  }
}

export default new HackerNews();
