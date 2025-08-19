import React, { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

const Contact = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-white">
      <h1 className="text-5xl md:text-6xl font-bold mb-12 animate-pulse">
        Schedule a Call
      </h1>

      <div className="w-full max-w-4xl p-6">
        <Cal
          namespace="30min"
          calLink="bennipetrus/30min"
          style={{ width: "100%", height: "600px", overflow: "scroll" }}
          config={{
            layout: "month_view",
            googleCalendarIntegration: true, // Google Meet aktivieren
          }}
        />
      </div>
    </div>
  );
};

export default Contact;
