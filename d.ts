declare module "@engingokmen/movie-app";
declare module "@engingokmen/employee-management";
// custom.d.ts
declare namespace JSX {
  interface IntrinsicElements {
    "employee-management": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >;
  }
}
