declare global {
  namespace JSX {
    interface IntrinsicElements {
      'moderate-info': {
        first: string;
        middle: string;
        last: string;
      };
    }
  }
}
export declare class ModerateInfo {
  /**
   * The first name
   */
  first: string;
  /**
   * The middle name
   */
  middle: string;
  /**
   * The last name
   */
  last: string;
  private getText;
  render(): any;
}
