import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full md:my-20 my-10'>
    {/* <motion.div
      id="scroll-indicator"
      className="fixed top-20 left-0 right-0 h-1 origin-left bg-[#ccc] z-10"
      style={{
        scaleX,
      }}
    /> */}
    <div className='flex flex-col justify-center items-center md:w-[750px] gap-6 pt-20'>
      <span className='font-inter font-semibold text-base text-[#B93815] '> Current as of 07 Jan 2025</span>
      <h1 className='font-krona font-normal md:text-5xl text-3xl text-[#181D27] text-center'>Terms of Service</h1>
      <p className='font-inter font-normal md:text-xl text-lg text-[#535862] text-center'>By accessing our website, you are agreeing to be bound by these terms of service,
        and agree that you are responsible for compliance with any applicable local laws.</p>
    </div>

    <div className='flex flex-col md:w-[720px]  md:mt-28 mt-20 gap-7'>
      {/*Terms of Service */}
      <div className='flex flex-col gap-4'>
        <span className='font-krona font-normal md:text-3xl text-xl text-[#181D27]'>Terms of Service</span>
        <p className='font-inter font-normal md:text-lg text-[#535862]'>Please read these Terms of Service (“Terms”) carefully, as they constitute a legally binding agreement between
          <span className='font-bold'> Llamaworx Software Pvt Ltd</span>, a company based in India (“Bolka AI,” “we,” “us,” or “our”), and you, the end-user (“you” or “your”).
          These Terms govern your use of our website, services, and platforms (collectively referred to as the “Services”).</p>
        <p className='font-inter font-normal md:text-lg  text-[#535862] '>
          If you are using the Services on behalf of an entity (such as your employer or client, collectively referred to as the “Client”),
          your acceptance of these Terms also binds the Client to this agreement.
        </p>

      </div>
      {/*Agreement and Acceptance */}
      <div className='flex flex-col gap-4'>
        <span className='font-krona font-normal md:text-3xl text-xl text-[#181D27]'>Agreement and Acceptance</span>
        <p className='font-inter font-normal md:text-lg  text-[#181D27] text-start'>This is a legally binding agreement. By accessing or using the Services, clicking “accept” or “agree” where these Terms are presented, or signing a subscription agreement that serves as a master agreement,
          you acknowledge and agree to be bound by these Terms.</p>
        <p className='font-inter font-normal md:text-lg  text-[#181D27] text-start'>If you are accepting these Terms on behalf of a Client,
          you represent and warrant that you have the authority to bind the Client to these Terms. In such cases, all references to “you” and “your” will also apply to the Client. If you do not agree to these Terms,
          you must not use the Services or create an account (“Account”) with us.</p>
        <span >Arbitration and Dispute Resolution</span>
        <p className='font-inter font-normal md:text-lg  text-[#181D27] text-start'>By agreeing to these Terms, you expressly acknowledge and agree that, except in limited circumstances,
          any disputes between the parties will be resolved exclusively through arbitration and solely on an individual basis.</p>
      </div>
      {/*Governing Law and Jurisdiction */}
      <div className='flex flex-col gap-10'>
        <span className='font-krona font-normal md:text-3xl text-xl text-[#181D27]'>Governing Law and Jurisdiction</span>
        <p className='font-inter font-normal md:text-lg  text-[#181D27] text-start'>These Terms shall be governed by and construed in accordance with the laws of India. For any disputes that are not resolved through arbitration,
          the courts located in Mumbai, Maharashtra shall have exclusive jurisdiction.</p>
        <div>
          <span className='font-krona font-normal md:text-2xl text-lg'>1. Acceptance of These Terms</span>
          <p className='font-inter font-normal md:text-lg  text-[#181D27] text-start'>
            By opening an account under a username, you agree to accept and comply with these Terms,
            regardless of any existing service agreement to which you may be a signatory,
            where these Terms are incorporated by reference.
            <span className='block'>You further agree to adhere to additional<span className='font-inter font-semibold'> Bolka AI</span> rules and policies, including our <span className='font-inter font-semibold'>Privacy Policy</span>, which outlines the information we collect and how we protect it. These policies are expressly incorporated into and form a part of these Terms.
              We encourage you to review them carefully.</span>
            <span className='block'>Once you accept these Terms, you are legally bound by them until they are terminated.
              For details on termination, please refer to Section 7 (Term and Termination).</span>
          </p>
        </div>
        {/*Using the Services*/}
        <div className='flex flex-col gap-4'>
          <span className='font-krona font-normal md:text-2xl text-lg'>2. Using the Services</span>
          <div>
            <span className='font-inter font-bold md:text-xl text-lg'>a. Right to Use and License</span>
            <p className='font-inter font-normal md:text-lg  text-[#181D27] text-start'>
              Subject to your compliance with these Terms,
              <span className='font-inter font-bold'> Llamaworx Software Pvt Ltd </span>
              grants you a non-exclusive, non-transferable, non-assignable, non-sublicensable,
              and revocable right to:
            </p>
            <ol className='list-decimal pl-6 font-inter font-normal md:text-lg  text-[#181D27] flex flex-col '>
              <li>

                <p className='text-start'>
                  Use the <span className='font-inter font-semibold'>Bolka AI</span> Services, and
                </p>
              </li>
              <li>
                <p className='text-start'>
                  If applicable, use object code installed on your systems (on-premise or cloud-based) solely for deploying AI voice agents
                  in accordance with the technical documentation provided.
                </p>
              </li>
            </ol>
            <p className='font-inter font-normal md:text-lg  text-[#181D27] text-start'>
              You acknowledge that you are granted only a right to use the Services and do not acquire any ownership interest or additional rights beyond those explicitly stated in these Terms.<span className='font-inter font-bold'> Llamaworx Software Pvt Ltd </span>
              reserves all other rights not expressly granted.
              For more details, refer to Section 4 on Intellectual Property Rights.
            </p>
          </div>
          <div>
            <span className='font-inter font-bold md:text-xl text-lg'>b. What We Provide</span>
            <p className='font-inter font-normal md:text-lg  text-[#181D27] text-start'>The Services include a hosted software solution (the “Platform”) designed for creating AI voice agents that
              interact with your customers or stakeholders in realistic, responsive conversations.</p>
            <ul className=' font-inter font-normal md:text-lg  text-[#181D27] text-start list-disc pl-6'>
              <li><p className='font-inter font-normal md:text-lg  text-[#181D27] text-start'>
                <span className='font-inter font-bold'>Transcription Services:</span> Converts speech to text, either locally or on cloud servers.
              </p></li>
              <li><p className='font-inter font-normal md:text-lg  text-[#181D27] text-start'>
                <span className='font-inter font-bold'>Large Language Model (LLM) Processing: </span>Utilizes trained AI models to generate responses.
              </p></li>
              <li><p className='font-inter font-normal md:text-lg  text-[#181D27] text-start'>
                <span className='font-inter font-bold'>Text-to-Speech Conversion: </span>Delivers responses in natural-sounding voices.
              </p></li>
            </ul>
          </div>
          <p className='font-inter font-normal md:text-lg  text-[#181D27] text-start'>Our Platform optimizes latency and realism, employing advanced tools for noise filtering, interruption handling, and conversation management.
            For more details, visit the “How Bolka AI Works” section on our website.</p>

          <div>
            <span className='font-inter font-bold md:text-xl text-lg'>c. Third-Parties</span>
            <p className='font-inter font-normal md:text-lg  text-[#181D27] text-start'>Our control layer interacts with third-party service providers (referred to as “Providers”) to facilitate transcription, LLM processing, and voice generation.
              These Providers may include Meta, Google, NVIDIA, Deepgram, OpenAI, Azure OpenAI, ElevenLabs, PlayHT, and others.</p>
            <ul className=' font-inter font-normal md:text-lg  text-[#181D27] text-start list-disc pl-6'>
              <li>Your Content may be shared with Providers, subject to their terms and conditions.</li>
              <li>We do not represent or warrant any services provided by third parties but offer a control layer to enhance the user experience across these Providers.</li>
              <li>You may bring your own API keys for integration with Providers through our dashboard. Fees for Providers are billed directly by them, while our fees include bundled usage charges for integrated services.</li>
            </ul>
          </div>
          <p className='font-inter font-normal md:text-lg  text-[#181D27] text-start'>For more details on customizing the Services, refer to our documentation on the website.</p>

          <div >
            <span className='font-inter font-bold md:text-xl text-lg'>d. Use Restrictions</span>
            <p className='font-inter font-normal md:text-lg  text-[#181D27] text-start'>You agree not to, and will not permit any third party to:</p>
            <ul className=' font-inter font-normal md:text-lg  text-[#181D27] text-start list-decimal pl-6'>
              <li>Use the Services for purposes other than intended, including selling, licensing, or commercially exploiting them.</li>
              <li>Misuse <span className='font-inter font-semibold'>Bolka AI</span> trademarks, logos, or proprietary materials.</li>
              <li>Alter, destroy, or remove copyright or proprietary notices on the Services.</li>
              <li>Reverse-engineer, decompile, or extract source code from the Services.</li>
              <li>Use automated tools like bots or scrapers to extract data from the Services.</li>
              <li>Upload viruses, bypass security measures, or compromise the platform’s integrity.</li>
              <li>Create datasets or machine-learning models using the Services.</li>
              <li>Use the Services for illegal purposes, including creating voice agents for unlawful activities.</li>
            </ul>
          </div>
          <p className='font-inter font-normal md:text-lg  text-[#181D27] text-start'>
            <span className='font-inter font-bold'> Llamaworx Software Pvt Ltd </span>
            reserves the right to determine, at its sole discretion, if a user action violates these rules.
          </p>

          <div>
            <span className='font-inter font-bold md:text-xl text-lg'>e. Service Updates</span>
            <p className='font-inter font-normal md:text-lg  text-[#181D27] text-start'>
              The Services are subject to periodic updates, which may include adding, modifying, or removing features.
              Updates may require you to accept new terms or download new software for continued use of the Services.
            </p>
          </div>

          <div>
            <span className='font-inter font-bold md:text-xl text-lg'>f. Fees</span>
            <p className='font-inter font-normal md:text-lg  text-[#181D27] text-start'>The use of <span className='font-inter font-semibold'>Bolka AI</span> Services is subject to the fees outlined on our website, primarily based on the volume of voice minutes processed, and add-on services like analysis, call recordings, call scripts,
              CRM integration, WhatsApp integration, and Agentic automation of the workflows.</p>
            <ul className=' font-inter font-normal md:text-lg  text-[#181D27] text-start list-disc pl-6'>
              <li>Fees are separate from those charged by third-party Providers.</li>
              <li>Subscription fees may change at the end of your current subscription term.</li>
              <li>Additional features or services may incur additional charges.</li>
            </ul>
          </div>
          <p className='font-inter font-normal md:text-lg  text-[#181D27] text-start'>For detailed billing guidance and examples,
            refer to the Billing section on our website.</p>
        </div>

        {/* */}

        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-4'>
            <span className='font-krona font-normal md:text-2xl text-lg'>3. Creating an Account</span>
            <div>
              <span className='font-inter font-bold md:text-xl text-lg'>a. Registration</span>
              <p className='font-inter font-normal md:text-lg  text-[#181D27] text-start'>
                To access the Services, you must register and create an account (“Account”) by providing the required information during the registration process.
                By doing so, you represent and warrant that:
              </p>
              <ul className=' font-inter font-normal md:text-lg  text-[#181D27] text-start list-decimal pl-6'>
                <li>All information submitted during registration is truthful, accurate, and complete.</li>
                <li>You will promptly update your Account information to ensure it remains accurate and current.</li>
              </ul>
            </div>
            <p className='font-inter font-normal md:text-lg  text-[#181D27] text-start'>You may delete your Account at any time and for any reason, subject to the
              conditions outlined in Section 7(b) (Term and Termination).</p>
          </div>


          <div className='flex flex-col gap-4'>
            <div>
              <span className='font-inter font-bold md:text-xl text-lg'>b. Eligibility</span>
              <p className='font-inter font-normal md:text-lg  text-[#181D27] text-start'>
                The Services are available only to users who are legally capable of entering binding contracts under applicable law.
                By accessing or using the Services, you represent and warrant that:
              </p>
              <ul className=' font-inter font-normal md:text-lg  text-[#181D27] text-start list-decimal pl-6'>
                <li>You are at least 18 years of age or have reached the age of majority in your state or country of residence.</li>
                <li>You are not barred from using the Services under applicable laws</li>
              </ul>
            </div>
          </div>

          <div className='flex flex-col gap-4'>
            <div>
              <span className='font-inter font-bold md:text-xl text-lg'>c. User Information & Credentials</span>
              <p className='font-inter font-normal md:text-lg  text-[#181D27] text-start'>
                When creating an Account with <span className='font-inter font-semibold'>Bolka AI</span>, you will choose a username and password. You agree to:
              </p>
              <ul className=' font-inter font-normal md:text-lg  text-[#181D27] text-start list-decimal pl-6'>
                <li>Maintain the confidentiality and security of your login credentials.</li>
                <li>Be solely responsible for all activities and charges associated with your Account, whether authorized or unauthorized.</li>
                <li>Notify
                  <span className='font-inter font-bold'> Llamaworx Software Pvt Ltd </span>immediately if you suspect unauthorized access to your Account or any breach of security
                  related to the Services or devices used to access them.
                </li>
              </ul>
            </div>
            <p className='font-inter font-normal md:text-lg  text-[#181D27] text-start'>You are prohibited from sharing your login credentials with others.
              Each user must maintain their own credentials to access the Services.</p>
          </div>
        </div>
        {/* Intellectual Property Rights, Ownership, and Grants*/}
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-4'>
            <span className='font-krona font-normal md:text-2xl text-lg'>4. Intellectual Property Rights, Ownership, and Grants</span>
            <div>
              <span className='font-inter font-bold md:text-xl text-lg'>a. Your Content</span>
              <p className='font-inter font-normal md:text-lg  text-[#181D27] text-start'>

                When you use the Services provided by <span className='font-inter font-semibold'>Bolka AI</span>, all materials uploaded or transmitted via the Platform are considered your content (“Your Content”). You retain all rights, title, and ownership in Your Content, including any associated Intellectual Property Rights. <span className='font-inter font-bold'> Llamaworx Software Pvt Ltd </span> does not claim ownership of Your Content or
                any associated rights except as explicitly granted under these Terms.
              </p>

            </div>

            <div className='flex flex-col gap-2'>
              <span className='font-inter font-bold md:text-xl text-lg'>b. Rights You Grant Us</span>
              <p className='font-inter font-normal md:text-lg  text-[#181D27] text-start'>
                <span className='font-inter font-semibold block'>i. License to Handle Your Content</span>  You grant
                <span className='font-inter font-bold'> Llamaworx Software Pvt Ltd </span>a worldwide, royalty-free, sublicensable license to host, store, use, display, reproduce, modify, analyze,
                and transmit Your Content solely for the purpose of providing the Services during the Term.
              </p>
              <p className='font-inter font-normal md:text-lg  text-[#181D27] text-start'>
                <span className='font-inter font-semibold block'>ii. Feedback</span>  By submitting any ideas, suggestions, or proposals (“Feedback”) to Llamaworx Software Pvt Ltd, you grant us a royalty-free, perpetual, irrevocable, worldwide, non-exclusive license to use, reproduce, modify, create derivative works from, and commercially exploit the Feedback for any purpose.
                You represent that you have all necessary rights to provide such Feedback and that no obligations of confidentiality apply.
              </p>
            </div>

            <div className='flex flex-col gap-4'>
              <div>
                <span className='font-inter font-bold md:text-xl text-lg'>c. Bolka AI’s Rights</span>
                <p className='font-inter font-normal md:text-lg  text-[#181D27] text-start'>
                  The Services, including all proprietary technology, software, content, and materials provided by
                  <span className='font-inter font-bold'> Llamaworx Software Pvt Ltd </span>
                  or its licensors, remain the exclusive property of their respective owners. This includes, but is not limited to:
                </p>
                <ul className=' font-inter font-normal md:text-lg  text-[#181D27] text-start list-disc pl-6'>
                  <li>Proprietary LLM capabilities.</li>
                  <li>Text, graphics, logos, software, and multimedia content.</li>
                </ul>
              </div>
              <div>
                <p className='font-inter font-normal md:text-lg  text-[#181D27] text-start'>For the purposes of these Terms,
                  <span className='font-inter font-bold'> Intellectual Property Rights </span>include:
                </p>
                <ul className=' font-inter font-normal md:text-lg  text-[#181D27] text-start list-decimal pl-6'>
                  <li>Patents, trademarks, and copyrights.</li>
                  <li>Rights in databases, software, and trade secrets.</li>
                  <li>All other intellectual property protections, whether registered or unregistered, globally.</li>
                </ul>
              </div>
              <p className='font-inter font-normal md:text-lg  text-[#181D27] text-start'>Your use of the Services is subject to compliance with these Terms and payment of applicable fees.</p>
            </div>
            <div>
              <span className='font-inter font-bold md:text-xl text-lg'>d. Rights Granted to Third Parties</span>
              <p className='font-inter font-normal md:text-lg  text-[#181D27] text-start'>
                Third-party Providers that deliver parts of the Services (e.g., transcription, LLM, and voice generation modules) require rights to handle
                Your Content to provide their respective services.
              </p>
              <ul className=' font-inter font-normal md:text-lg  text-[#181D27] text-start list-disc pl-6'>
                <li>Each Provider operates under its own contractual terms, which you are responsible for reviewing.</li>
                <li>While we expect Providers to comply with their legal and contractual obligations,
                  <span className='font-inter font-bold'> Llamaworx Software Pvt Ltd </span> does not monitor or guarantee their adherence to those terms.</li>
              </ul>
            </div>
          </div>
        </div>
        {/*5. Aggregate Statistics */}
        <div className='flex flex-col gap-4'>
          <span className='font-krona font-normal md:text-2xl text-lg'>5. Aggregate Statistics</span>
          <div>
            <p className='font-inter font-normal md:text-lg  text-[#181D27] text-start'>
              <span className='font-inter font-semibold'>Bolka AI</span> by <span className='font-inter font-bold'> Llamaworx Software Pvt Ltd </span>may monitor your use of the Services, including the Platform, and collect aggregated and anonymized data related to such use (“Aggregated Statistics”). These Aggregated Statistics may include statistical and
              performance information that is not identifiable to any individual or entity.
              <span className='block'>
                All rights to the Aggregated Statistics are owned exclusively by <span className='font-inter font-bold'> Llamaworx Software Pvt Ltd </span>, and we may use this data to operate, develop, enhance, promote, and improve our Services.
              </span>
            </p>
          </div>
        </div>
        {/*Communications */}
        <div className='flex flex-col gap-4'>
          <span className='font-krona font-normal md:text-2xl text-lg'>6. Communications</span>
          <div>
            <p className='font-inter font-normal md:text-lg  text-[#181D27] text-start'>By accepting these Terms or using the Services, you consent to receive communications from us via email, push notifications, or other channels.
              These communications may include, but are not limited to:</p>
            <ul className=' font-inter font-normal md:text-lg  text-[#181D27] text-start list-decimal pl-6'>
              <li>Operational updates about your Account or usage of the Services.</li>
              <li>Notifications about new or existing features within the Services.</li>
              <li>News, announcements, or updates related to <span className='font-inter font-semibold'>Bolka AI</span>, industry trends, and developments.</li>
            </ul>
          </div>
          <p className='font-inter font-normal md:text-lg  text-[#181D27] text-start'>
            You can manage your communication preferences by contacting us or adjusting your notification settings within the Platform.
          </p>

        </div>
        {/* Term and Termination*/}
        <div className='flex flex-col gap-4'>
          <span className='font-krona font-normal md:text-2xl text-lg'>7. Term and Termination</span>
          <div>
            <span className='font-inter font-bold md:text-xl text-lg'>a. Term</span>
            <p className='font-inter font-normal md:text-lg  text-[#181D27] text-start'>These Terms commence on the earlier of the date you first created an Account to use the Services or the date you accepted these Terms. These Terms will remain in effect as long as you use the Services,
              unless terminated earlier in accordance with this Section.</p>
          </div>
          <div>
            <span className='font-inter font-bold md:text-xl text-lg'>b. Termination by Bolka AI</span>
            <p className='font-inter font-normal md:text-lg  text-[#181D27] text-start'>
              <span className='font-inter font-bold'> Llamaworx Software Pvt Ltd </span> reserves the right to suspend or
              terminate your access to the Services immediately and without prior notice if:
            </p>
            <div>
              <ul className=' font-inter font-normal md:text-lg  text-[#181D27] text-start list-decimal pl-6'>
                <li>You breach any provision of these Terms.</li>
                <li>It becomes unlawful for <span className='font-inter font-bold'> Llamaworx Software Pvt Ltd </span> to provide the Services.</li>
                <li>It becomes commercially impracticable to continue offering the Services.</li>

              </ul>
              <p className='font-inter font-normal md:text-lg  text-[#181D27] text-start'>All decisions regarding termination are made at our sole discretion.</p>
            </div>
          </div>

          <div>
            <span className='font-inter font-bold md:text-xl text-lg'>c. Liability for Termination</span>
            <p className='font-inter font-normal md:text-lg  text-[#181D27] text-start'>You acknowledge and agree that <span className='font-inter font-bold'> Llamaworx Software Pvt Ltd </span> will not be liable to you or any third party for the termination of your Account. If applicable,
              we will refund any prepaid amount on a pro-rata basis for the unused duration of your subscription term following termination.</p>
          </div>

          <div>
            <span className='font-inter font-bold md:text-xl text-lg'>d. Termination by You</span>
            <p className='font-inter font-normal md:text-lg  text-[#181D27] text-start'>You may terminate these Terms by providing notice that you no longer wish to use the Services. Except for the clauses that survive termination,
              these Terms will cease to apply to you upon termination.</p>
          </div>

          <div>
            <span className='font-inter font-bold md:text-xl text-lg'>e. Effect of Termination</span>
            <p className='font-inter font-normal md:text-lg  text-[#181D27] text-start'>Upon termination of the Services for any reason:</p>
            <ul className=' font-inter font-normal md:text-lg  text-[#181D27] text-start list-decimal pl-6'>
              <li>Your use rights will immediately cease.</li>
              <li>You may lose access to your Account, including any data, files, or information associated with it, which may be deleted.</li>
              <li><span className='font-inter font-bold'> Llamaworx Software Pvt Ltd </span> will not be liable for any losses resulting from such suspension or termination.</li>
            </ul>
          </div>

          <div>
            <span className='font-inter font-bold md:text-xl text-lg'>f. Survival</span>
            <p className='font-inter font-normal md:text-lg  text-[#181D27] text-start'>The following Sections will survive termination: Section 7(f),
              Sections 4(a), 4(b)(ii), 4(c), 4(d), 7(e), 9, 10, 11, 12, 14, 16, and 19.</p>

          </div>
        </div>
        {/* Changes to Terms*/}
        <div>
          <span className='font-krona font-normal md:text-2xl text-lg'>8. Changes to Terms</span>
          <p className='font-inter font-normal md:text-lg  text-[#181D27] text-start'>
            These Terms may be revised periodically at the sole discretion of <span className='font-inter font-bold'> Llamaworx Software Pvt Ltd </span>. When changes are made, a new version of these Terms of Service will be made available on the Bolka AI website and within the App.
            <span className='block'>
              The "Last Updated" date at the top of these Terms will be updated to reflect the revisions.
              We encourage you to review these Terms regularly to stay informed about any updates.
            </span>
          </p>

        </div>
        {/*Indemnity */}
        <div className='flex flex-col gap-4'>
          <span className='font-krona font-normal md:text-2xl text-lg'>9. Indemnity</span>

          <div className='flex flex-col gap-4'>
            <div>
              <span className='font-inter font-bold md:text-xl text-lg'>a. Your Indemnification Obligation</span>
              <p className='font-inter font-normal md:text-lg  text-[#181D27] text-start'>You agree to indemnify and hold harmless Llamaworx Software Pvt Ltd and its affiliates (“Bolka Parties”) from any claims, losses,
                or damages (including legal fees) arising from:</p>
              <ul className=' font-inter font-normal md:text-lg  text-[#181D27] text-start list-decimal pl-6'>
                <li>Your use of the Services.</li>
                <li>Your breach of these Terms, applicable laws, or third-party rights.</li>
                <li>Your negligence or misconduct.</li>

              </ul>
            </div>
            <p className='font-inter font-normal md:text-lg  text-[#181D27] text-start'><span className='font-inter font-bold'> Llamaworx Software Pvt Ltd </span> may assume the defense of such claims, and you agree to cooperate fully.
              This obligation survives the termination of your Account or these Terms.</p>
          </div>

          <div className='flex flex-col gap-4'>
            <div>
              <span className='font-inter font-bold md:text-xl text-lg'>b. Indemnification by Bolka</span>
              <p className='font-inter font-normal md:text-lg  text-[#181D27] text-start'>
                <span className='font-inter font-bold'> Llamaworx Software Pvt Ltd </span> Ltd will indemnify you and your authorized representatives for damages (including legal fees) resulting from:
              </p>
              <ul className=' font-inter font-normal md:text-lg  text-[#181D27] text-start list-decimal pl-6'>
                <li>Claims that Bolka Services infringe third-party intellectual property rights.</li>
                <li>Bolka's gross negligence, fraud, or breach of its obligations.</li>
              </ul>
            </div>
            <p className='font-inter font-normal md:text-lg  text-[#181D27] text-start'>You must cooperate in defending such claims, and <span className='font-inter font-bold'> Llamaworx Software Pvt Ltd </span> retains sole authority over defense and settlements,
              provided settlements do not impose obligations on you without consent.</p>
          </div>

          <div >
            <span className='font-inter font-bold md:text-xl text-lg'>c. Injunctions</span>
            <p className='font-inter font-normal md:text-lg  text-[#181D27] text-start'>If your use of the Services is enjoined due to infringement claims, <span className='font-inter font-bold'> Llamaworx Software Pvt Ltd </span> may:</p>

            <ul className=' font-inter font-normal md:text-lg  text-[#181D27] text-start list-decimal pl-6'>
              <li>Modify the Services to resolve the issue.</li>
              <li>Procure continued usage rights for you.</li>
              <li>Terminate the Services and refund unused fees.</li>
            </ul>
          </div>
          <div>
            <span className='font-inter font-bold md:text-xl text-lg'>d. Exclusions</span>
            <p className='font-inter font-normal md:text-lg  text-[#181D27] text-start'>
              <span className='font-inter font-bold'> Llamaworx Software Pvt Ltd </span> is not liable for infringement claims arising from:
            </p>
            <ul className=' font-inter font-normal md:text-lg  text-[#181D27] text-start list-decimal pl-6'>
              <li>Unauthorized modifications to the Services.</li>
              <li>Misuse of Services or failure to safeguard credentials.</li>
            </ul>
          </div>
          <div>
            <span className='font-inter font-bold md:text-xl text-lg'>e. Sole Remedy</span>
            <p className='font-inter font-normal md:text-lg  text-[#181D27] text-start'>
              This section constitutes <span className='font-inter font-bold'> Llamaworx Software Pvt Ltd </span> Ltd’s entire obligation regarding intellectual property infringement claims.
            </p>
          </div>
          <div>
            <span className='font-inter font-bold md:text-xl text-lg'>f. TRAI Compliance</span>
            <p className='font-inter font-normal md:text-lg  text-[#181D27] text-start'>Bolka users must adhere to TRAI guidelines for cold calling, using only 140-series numbers. Misuse of any other number via the Bolka platform is the sole responsibility of the user,
              who indemnifies <span className='font-inter font-bold'> Llamaworx Software Pvt Ltd </span> and its directors and employees against any resulting claims or damages thereof.</p>

          </div>
        </div>
        {/*  Force Majeure*/}
        <div >
          <span className='font-krona font-normal md:text-2xl text-lg'>10. Force Majeure</span>
          <p className='font-inter font-normal md:text-lg  text-[#181D27] text-start'>
            <span className='font-inter font-bold'> Llamaworx Software Pvt Ltd </span>will not be held liable for any delay or failure to perform resulting from causes beyond its reasonable control. These include, but are not limited to, acts of God, war, terrorism, riots, embargoes, actions of civil or military authorities,
            fire, floods, pandemics, accidents, strikes, or shortages of transportation, fuel, energy, labor, or materials.
          </p>
        </div>
        {/*Disclaimer of Warranties and Conditions */}
        <div className='flex flex-col gap-4'>
          <span className='font-krona font-normal md:text-2xl text-lg'>11. Disclaimer of Warranties and Conditions</span>
          <div>
            <span className='font-inter font-bold md:text-xl text-lg'>a. "As Is" and "As Available" Basis</span>
            <p className='font-inter font-normal md:text-lg  text-[#181D27] text-start'>You acknowledge and agree that your use of the Services is at your sole risk. The Services are provided on an “as is” and “as available” basis, with all faults. <span className='font-inter font-bold'> Llamaworx Software Pvt Ltd </span> expressly disclaims all warranties,
              representations, and conditions of any kind, whether express or implied, including, but not limited to,
              implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement.</p>
          </div>

          <div>
            <span className='font-inter font-bold md:text-xl text-lg'>b. No Guarantees</span>
            <p className='font-inter font-normal md:text-lg  text-[#181D27] text-start'>
              Except as explicitly outlined under a service level agreement, <span className='font-inter font-bold'> Llamaworx Software Pvt Ltd </span> does not guarantee:
            </p>
            <ul className=' font-inter font-normal md:text-lg  text-[#181D27] text-start list-decimal pl-6'>
              <li>The quality, performance, or effectiveness of the Services or those of Providers.</li>
              <li>That the Services will be uninterrupted, error-free, or timely.The Services may experience delays, disruptions, or cancellations beyond our control.</li>
            </ul>
          </div>

          <div>
            <span className='font-inter font-bold md:text-xl text-lg'>c. No Additional Warranties</span>
            <p className='font-inter font-normal md:text-lg  text-[#181D27] text-start'>
              No advice or information, whether oral or written, obtained from <span className='font-inter font-bold'> Llamaworx Software Pvt Ltd </span> or through the Services,
              will create any warranty not explicitly stated in these Terms.
            </p>
          </div>

          <div>
            <span className='font-inter font-bold md:text-xl text-lg'>d. Responsibility for Traffic Flow</span>
            <p className='font-inter font-normal md:text-lg  text-[#181D27] text-start'>
              Unless explicitly limited by traffic flow settings, <span className='font-inter font-bold'> Llamaworx Software Pvt Ltd </span> does not restrict incoming voice calls to the platform or outbound calls from the platform.
              You are responsible for all minutes utilized, regardless of whether the traffic exceeds your initial expectations.
            </p>
          </div>

          <div>
            <span className='font-inter font-bold md:text-xl text-lg'>e. Service Interruptions</span>
            <p className='font-inter font-normal md:text-lg  text-[#181D27] text-start'>
              The Company does not guarantee that the Platform or Services will meet your requirements, or that they will be available, secure, timely, or error-free.
              The Company is not liable for any interruptions, including system failures or other service disruptions.
            </p>
          </div>

          <div>
            <span className='font-inter font-bold md:text-xl text-lg'>f. Loss of Data</span>
            <p className='font-inter font-normal md:text-lg  text-[#181D27] text-start'>
              The Company is not liable for any loss, damage, or corruption of your data arising from your use of the Platform.
            </p>
          </div>

          <div>
            <span className='font-inter font-bold md:text-xl text-lg'>g. Informational Purposes Only</span>
            <p className='font-inter font-normal md:text-lg  text-[#181D27] text-start'>
              All information, materials, and documents provided on the Platform are for
              informational purposes only and should not be construed as guarantees or warranties of any kind.
            </p>
          </div>
          <div>
            <span className='font-inter font-bold md:text-xl text-lg'>h. Accuracy of Information</span>
            <p className='font-inter font-normal md:text-lg  text-[#181D27] text-start'>
              While the Company strives to ensure the information on the Platform is accurate and complete,
              it does not guarantee the quality, accuracy, or completeness of any data or information. The Company is not responsible for:
            </p>
            <ul className=' font-inter font-normal md:text-lg  text-[#181D27] text-start list-disc pl-6'>
              <li>Delays or inability to use the Platform.</li>
              <li>Failure to provide functionalities or any errors in information, software, or graphics obtained via the Platform.</li>
              <li>Unavailability of the Platform due to maintenance, technical issues, or reasons beyond the Company’s control.</li>
            </ul>
          </div>
        </div>
        {/*Security Policy */}
        <div className='flex flex-col gap-4'>
          <span className='font-krona font-normal md:text-2xl text-lg'>12. Security Policy</span>
          <div>
            <span className='font-inter font-bold md:text-xl text-lg'>a. Security Measures</span>
            <p className='font-inter font-normal md:text-lg  text-[#181D27] text-start'>
              Llamaworx Software Pvt Ltd implements robust security measures to
              protect your personal information from unauthorized access or disclosure, including:
            </p>
            <ul className=' font-inter font-normal md:text-lg  text-[#181D27] text-start list-disc pl-6'>
              <li><span className='font-bold'>Data Encryption:</span> Sensitive information transmitted online is encrypted using Secure Socket Layer (SSL) technology.</li>
              <li><span className='font-bold'>Access Controls:</span> Personal data access is restricted to authorized personnel with a legitimate need for it.</li>
            </ul>
          </div>
          <div>
            <span className='font-inter font-bold md:text-xl text-lg'>b. Incident Response</span>
            <p className='font-inter font-normal md:text-lg  text-[#181D27] text-start'>
              In the event of a security breach, we follow a structured incident response plan:
            </p>
            <ul className=' font-inter font-normal md:text-lg  text-[#181D27] text-start list-disc pl-6'>
              <li>Prompt investigation and assessment of the breach.</li>
              <li>Notification to affected individuals, as required by law.</li>
              <li>Corrective actions to prevent recurrence.</li>
            </ul>
          </div>

          <div>
            <span className='font-inter font-bold md:text-xl text-lg'>c. Employee Training</span>
            <p className='font-inter font-normal md:text-lg  text-[#181D27] text-start'>
              All employees undergo regular training on security protocols and best practices to ensure compliance with data protection responsibilities.
            </p>
          </div>

          <div>
            <span className='font-inter font-bold md:text-xl text-lg'>d. Compliance</span>
            <p className='font-inter font-normal md:text-lg  text-[#181D27] text-start'>
              We adhere to industry-leading standards,
              including <span className='font-semibold'>SOC2, PCI DSS,</span> and <span className='font-semibold'>GDPR,</span> ensuring our practices align with applicable data protection laws.
            </p>
          </div>
          <div>
            <span className='font-inter font-bold md:text-xl text-lg'>e. Policy Updates</span>
            <p className='font-inter font-normal md:text-lg  text-[#181D27] text-start'>
              This Security Policy is reviewed and updated periodically to maintain its effectiveness and relevance in protecting your information.
            </p>
          </div>
        </div>
        {/*Contact Us */}
        <div className='flex flex-col gap-4'>
          <h1 className='font-krona font-normal md:text-3xl text-xl text-[#181D27]'>Contact Us</h1>
          <p className='font-inter font-normal md:text-lg  text-[#181D27] text-start'>
            <span className='font-inter font-semibold'>Bolka AI</span> welcomes your comments, questions, concerns, or suggestions.
            Please feel free to reach out to us at:
          </p>
          <p className='font-inter font-normal md:text-lg  text-[#181D27] text-start'>
            <span className='font-inter font-bold text-lg text-[#181D27]'> Email: </span>contact@llamaworx.com
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default page
