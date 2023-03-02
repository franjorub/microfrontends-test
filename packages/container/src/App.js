import React from "react";

const MarketingApp = React.lazy(() =>
  import("./components/MarketingApp").catch((e) => ({
    default: () => <div>Can't load marketing section</div>,
  }))
);

export default function App() {
  return (
    <div>
      <h1>Hello from container!</h1>
      <hr />
      <React.Suspense fallback={<div>Loading Marketing from remote...</div>}>
        <MarketingApp />
      </React.Suspense>
    </div>
  );
}
