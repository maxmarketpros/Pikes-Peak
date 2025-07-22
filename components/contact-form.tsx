"use client"

import { useEffect } from "react"

export function ContactForm() {
  useEffect(() => {
    // Load the form embed script
    const script = document.createElement('script')
    script.src = 'https://link.msgsndr.com/js/form_embed.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="w-full">
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/MQ100PwdsBkvHB64UKfD"
        style={{
          width: '100%',
          height: '669px',
          border: 'none',
          borderRadius: '3px'
        }}
        id="inline-MQ100PwdsBkvHB64UKfD"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="WebSite Form Template"
        data-height="669"
        data-layout-iframe-id="inline-MQ100PwdsBkvHB64UKfD"
        data-form-id="MQ100PwdsBkvHB64UKfD"
        title="WebSite Form Template"
      />
    </div>
  )
}
