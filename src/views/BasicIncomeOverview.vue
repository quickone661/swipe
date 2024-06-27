<template>
  <body typeof="WebPage" resource="#wb-webpage">
  <div class="newpar new section"></div>

  <div class="par iparys_inherited">
    <div class="global-header">
      <nav>
        <ul id="wb-tphp" class="wb-init wb-disable-inited">
          <li class="wb-slc"><a class="wb-sl" href="#">Skip to main content</a></li>
          <li class="wb-slc"><a class="wb-sl" href="#">Skip to: Social Insurance Number</a></li>
          <li class="wb-slc"><a class="wb-sl" href="#">Skip to "About government"</a></li>

          <li class="wb-slc">
            <a class="wb-sl" href="#" rel="alternate">Switch to basic HTML version</a>
          </li>
        </ul>
      </nav>

      <header>
        <div id="wb-bnr" class="container">
          <div class="row">
            <section id="wb-lng" class="col-xs-3 col-sm-12 pull-right text-right">
              <h2 class="wb-inv">Language selection</h2>
              <div class="row">
                <div class="col-md-12">
                  <ul class="list-inline mrgn-bttm-0">
                    <li>
                      <a lang="fr" href="#">
                        <span class="hidden-xs" translate="no">English</span>
                        <abbr
                            title="Français"
                            class="visible-xs h3 mrgn-tp-sm mrgn-bttm-0 text-uppercase"
                            translate="no"
                        >En</abbr
                        >
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <div
                class="brand col-xs-9 col-sm-5 col-md-4"
                property="publisher"
                resource="#wb-publisher"
                typeof="GovernmentOrganization"
            >
              <a href="#" property="url">
                <img
                    src="../assets/img/sig-blk-en.svg"
                    alt="Basic Income Program"
                    property="logo"
                />
                <span class="wb-inv">
                    /

                    <span lang="fr"> du Canada</span>
                  </span>
              </a>

              <link property="logo" href="../assets/img/wmms-blk.svg" />
            </div>
            <section
                id="wb-srch"
                class="col-lg-offset-4 col-md-offset-4 col-sm-offset-2 col-xs-12 col-sm-5 col-md-4"
            >
              <h2>Search</h2>

              <form action="#" method="get" name="cse-search-box" role="search">
                <div class="form-group wb-srch-qry">
                  <label for="wb-srch-q" class="wb-inv">Search Canada.ca</label>

                  <input
                      id="wb-srch-q"
                      list="wb-srch-q-ac"
                      class="wb-srch-q form-control"
                      name="q"
                      type="search"
                      value=""
                      size="34"
                      maxlength="170"
                      placeholder="Search Canada.ca"
                  />

                  <datalist id="wb-srch-q-ac"> </datalist>
                </div>
                <div class="form-group submit">
                  <button
                      type="submit"
                      id="wb-srch-sub"
                      class="btn btn-primary btn-small"
                      name="wb-srch-sub">
                      <span class=""><SearchOutlined style="color: white;font-weight: bolder" /></span
                      ><span class="wb-inv">Search</span>
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>
        <hr />

        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <nav
                  class="gcweb-menu wb-init gcweb-menu-inited"
                  typeof="SiteNavigationElement"
                  id="wb-auto-2"
              >
                <h2 class="wb-inv">Menu</h2>
                <button
                    type="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                    aria-label="Press the SPACEBAR to expand or the escape key to collapse this menu. Use the Up and Down arrow keys to choose a submenu item. Press the Enter or Right arrow key to expand it, or the Left arrow or Escape key to collapse it. Use the Up and Down arrow keys to choose an item on that level and the Enter key to access it."
                >

                  <span class="wb-inv">Main </span>Menu
                  <span class="">  <CaretDownOutlined /> </span>
                </button>
                <ul
                    role="menu"
                    aria-orientation="vertical"
                    data-ajax-replace="/content/dam/canada/sitemenu/sitemenu-v2-en.html"
                    class="wb-init wb-data-ajax-replace-inited"
                    id="wb-auto-3"
                >

                </ul>
              </nav>
            </div>
          </div>
        </div>

        <nav id="wb-bc" property="breadcrumb">
          <h2 class="wb-inv">You are here:</h2>
          <div class="container">
            <ol class="breadcrumb">
              <li><a href="#">Canada.ca</a></li>
              <li><a href="#">Canada emergency response benefit</a></li>
            </ol>
          </div>
        </nav>
      </header>
    </div>
  </div>

  <main
      property="mainContentOfPage"
      resource="#wb-main"
      typeof="WebPageElement"
      class="container"
  >
    <div class="mwsgeneric-base-html parbase section">
      <div class="gc-subway-wrapper">
        <nav class="provisional gc-subway wb-init gc-subway-inited no-blink" id="wb-auto-4">
          <hgroup>
            <h1 id="gc-document-nav">Basic Income Pilot Program </h1>
            <p class="h3 hidden-xs visible-md visible-lg mrgn-tp-0">Sections</p>
          </hgroup>
          <ul>
            <li>
              <a href="#" class="active hidden-xs hidden-sm" aria-current="page" tabindex="0"
              >Overview</a
              ><a href="#" class="active hidden-md hidden-lg" aria-current="page" tabindex="0"
            >Overview</a
            >
            </li>
            <li>
               <router-link :to="{name:'apply'}"><a href="#" class="hidden-xs hidden-sm">Who needs basic income</a></router-link>
               <router-link :to="{name:'apply'}"><a href="#" class="hidden-xs hidden-sm hidden-md hidden-lg">Who needs basic income</a></router-link>
                <router-link :to="{name: 'apply'}"><a href="#" class="visible-xs visible-sm hidden-xs hidden-sm">Who needs basic income</a></router-link>
              <a href="#" class="visible-xs visible-sm hidden-md hidden-lg">Who needs basic income</a> <router-link :to="{name: 'apply'}"></router-link>
            </li>
            <li>
               <router-link :to="{name:'application'}"><a  class="hidden-xs hidden-sm">Apply</a></router-link>
                <router-link :to="{name: 'application'}"> <a href="#" class="hidden-xs hidden-sm hidden-md hidden-lg">Apply</a></router-link>
               <router-link :to="{name:'application'}"> <a href="#" class="visible-xs visible-sm hidden-xs hidden-sm">Apply</a></router-link>
               <router-link :to="{name:'application'}"> <a href="#" class="visible-xs visible-sm hidden-md hidden-lg">Apply</a></router-link>
            </li>
            <li>
              <a href="#" class="hidden-xs hidden-sm"
              >emergency response  <abbr>benefit</abbr></a
              ><a href="#" class="hidden-xs hidden-sm hidden-md hidden-lg"
            >emergency response  <abbr>benefit</abbr></a
            >
              <a href="#" class="visible-xs visible-sm hidden-xs hidden-sm"
              >emergency response  <abbr>benefit</abbr></a
              ><a href="#" class="visible-xs visible-sm hidden-md hidden-lg"
            >emergency response  <abbr>benefit</abbr></a
            >
            </li>
            <li>
              <a href="#" class="hidden-xs hidden-sm">Disability Support <abbr></abbr></a
              ><a href="#" class="hidden-xs hidden-sm hidden-md hidden-lg"
            >Disability Support <abbr></abbr></a
            >
              <a href="#" class="visible-xs visible-sm hidden-xs hidden-sm"
              >Disability Support <abbr></abbr></a
              ><a href="#" class="visible-xs visible-sm hidden-md hidden-lg"
            >Disability Support <abbr></abbr></a
            >
            </li>
            <li>
              <a href="#" class="hidden-xs hidden-sm">Universal basic income</a
              ><a href="#" class="hidden-xs hidden-sm hidden-md hidden-lg"
            >Universal basic income</a
            >
              <a href="#" class="visible-xs visible-sm hidden-xs hidden-sm">Reporting a death</a
              ><a href="#" class="visible-xs visible-sm hidden-md hidden-lg"
            >Universal basic income</a
            >
            </li>
            <li>
              <a href="#" class="hidden-xs hidden-sm">Guaranteed basic income</a
              ><a href="#" class="hidden-xs hidden-sm hidden-md hidden-lg"
            >Guaranteed basic income</a
            >
              <a href="#" class="visible-xs visible-sm hidden-xs hidden-sm">Guaranteed basic income</a
              ><a href="#" class="visible-xs visible-sm hidden-md hidden-lg"
            >Guaranteed basic income</a
            >
            </li>
          </ul>
        </nav>
      </div>
      <section class="gc-subway-section">
        <hgroup>
          <p>Basic Income Pilot Program </p>
          <h1 property="name" id="wb-cont" class="gc-thickline">Overview</h1>
        </hgroup>
        <section class="alert" style="color: #000">
          <CaretDownOutlined style="color: #af3c43" />
          <h2>Basic Income Pilot (BIPP)</h2>
          <p>
            for establishing a national livable income program
          </p>
        </section>
        <p>
          To support Canadians and improve economic security, the Government of Canada is introducing a pilot program for Basic Income. This initiative aims to provide a stable financial foundation, ensuring that every participant has a guaranteed minimum income to meet their essential needs.
        </p>
        <p>
          What makes basic income different from other programs, such as income assistance or welfare, is that it comes with no strings attached. In the simplest terms, it's a regular payment without conditions, sent from the government to families and individuals.
        </p>
        <p>
          The pilot program will provide valuable data on the impact of basic income, helping to inform future policy decisions and potential expansions of the program.
        </p>
        <h2>Program Features</h2>
        <p>Applicant may be advised to go through the program features:</p>
        <ul>
          <li>
            find it on your income tax return, tax slips, record of employment, RRSP contribution
          </li>
          <li>
            view it by signing in or registering for
             <RouterLink :to="{name:'application'}">   <a href="#">My Basic Income Pilot</a> (MBIP) </RouterLink>
          </li>
        </ul>
        <h2>Eligibility</h2>
        <p>
          The pilot program is open to Canadians and permanent residents between the ages of 18 to 65. All applicants will be considered, and selected candidates will be notified.
        </p>
        <p>
          This ensures that a diverse group of participants can benefit from the program, allowing the government to gather comprehensive data on its effectiveness across different demographics.
        </p>
        <h2>Payment Amount</h2>
        <p>
          Participants will receive a fixed monthly payment, which is designed to cover basic living expenses such as food, shelter, and utilities. The amount will be set to provide a sufficient safety net, helping individuals to maintain a standard quality of life and to focus on their personal and professional growth without the constant stress of financial instability.

        </p>
        <h2>Duration</h2>
        <p>
          The pilot program will run for 6 months, during which data will be collected to assess its impact and effectiveness.
        </p>
        <p>
          This period will allow participants to experience the benefits of a basic income over a substantial timeframe, providing valuable insights into the long-term effects of the program on economic stability, health, and overall well-being.
        </p>
        <h2>Limited Spots</h2>
        <p>
          The number of spots available in the pilot program is limited, so timely application is crucial. This limitation is necessary to ensure that the program can be managed effectively and that the data collected is of high quality, allowing for a thorough evaluation of the program's success and areas for improvement.
        </p>
        <h2>Responsibilities and Security</h2>
        <p>
          Your Basic Income information is private and it is your responsibility to keep it secure. Service Canada is dedicated to protecting your personal information and ensuring the integrity of the program. Participants are encouraged to safeguard their personal details and report any suspicious activity or concerns to Service Canada immediately.
        </p>
        <p>
          This service is available in all Canadian provinces, and  available in all the
          territories.
        </p>
        <p>
          If you live in the territories,&nbsp;<a href="#"> <router-link :to="{name:'apply'}">apply</router-link>   </a>&nbsp;for your Basic Income
          directly through Service Canada.
        </p>
        <h3>
          To register  and apply for your  BIPP, choose your province
        </h3>
        <div class="wb-fieldflow wb-init wb-fieldflow-inited hidden" id="wb-auto-5">
          <p>Select your province...</p>
          <ul>
            <li id="wb-auto-8"><a rel="external" href="#">Alberta</a></li>
            <li id="wb-auto-9"><a rel="external" href="#">British Columbia</a></li>
            <li id="wb-auto-10"><a rel="external" href="#">Manitoba</a></li>
            <li id="wb-auto-11"><a rel="external" href="#">New Brunswick</a></li>
            <li id="wb-auto-12"><a rel="external" href="#">Newfoundland and Labrador</a></li>
            <li id="wb-auto-13"><a rel="external" href="#">Nova Scotia</a></li>
            <li id="wb-auto-14"><a rel="external" href="#">Ontario</a></li>
            <li id="wb-auto-15"><a rel="external" href="#">Prince Edward Island</a></li>
            <li id="wb-auto-16"><a rel="external" href="#">Quebec</a></li>
            <li id="wb-auto-17"><a rel="external" href="#">Saskatchewan</a></li>
          </ul>
        </div>
        <div class="wb-frmvld wb-fieldflow-form wb-frmvld-inited" id="wb-auto-7">
          <form >
            <div id="wb-auto-6">
              <label for="wb-auto-18" class="required"
              ><span class="field-name">Select your province...</span>
                <strong class="required" aria-hidden="true">(required)</strong> </label
              ><select
                id="wb-auto-18"
                name="wb-fieldflowwb-auto-1wb-auto-18"
                class="full-width form-control mrgn-bttm-md wb-fieldflow-init"
                data-wb-fieldflow-origin="wb-auto-5"
                data-wb-fieldflow-source="wb-auto-5"
                required
            >
              <option value="">Make your selection...</option>
              <option
                  value="Alberta"
                  data-wb-fieldflow='{"bind":"wb-auto-8","actions":[{"action":"redir","url":"#"}]}'
              >
                Alberta
              </option>
              <option
                  value="British Columbia"
                  data-wb-fieldflow='{"bind":"wb-auto-9","actions":[{"action":"redir","url":"#"}]}'
              >
                British Columbia
              </option>
              <option
                  value="Manitoba"
                  data-wb-fieldflow='{"bind":"wb-auto-10","actions":[{"action":"redir","url":"#"}]}'
              >
                Manitoba
              </option>
              <option
                  value="New Brunswick"
                  data-wb-fieldflow='{"bind":"wb-auto-11","actions":[{"action":"redir","url":"#"}]}'
              >
                New Brunswick
              </option>
              <option
                  value="Newfoundland and Labrador"
                  data-wb-fieldflow='{"bind":"wb-auto-12","actions":[{"action":"redir","url":"#"}]}'
              >
                Newfoundland and Labrador
              </option>
              <option
                  value="Nova Scotia"
                  data-wb-fieldflow='{"bind":"wb-auto-13","actions":[{"action":"redir","url":"#"}]}'
              >
                Nova Scotia
              </option>
              <option
                  value="Ontario"
                  data-wb-fieldflow='{"bind":"wb-auto-14","actions":[{"action":"redir","url":"#"}]}'
              >
                Ontario
              </option>
              <option
                  value="Prince Edward Island"
                  data-wb-fieldflow='{"bind":"wb-auto-15","actions":[{"action":"redir","url":"#"}]}'
              >
                Prince Edward Island
              </option>
              <option
                  value="Quebec"
                  data-wb-fieldflow='{"bind":"wb-auto-16","actions":[{"action":"redir","url":"#"}]}'
              >
                Quebec
              </option>
              <option
                  value="Saskatchewan"
                  data-wb-fieldflow='{"bind":"wb-auto-17","actions":[{"action":"redir","url":"#"}]}'
              >
                Saskatchewan
              </option>
            </select>
            </div>
             <router-link :to="{name:'application'}"><input type="button" value="Continue" class="btn btn-primary mrgn-bttm-md" style="color: white !important;" /></router-link>
          </form>
          <div aria-relevant="all" aria-live="polite" class="arialive wb-inv"></div>
        </div>
        <h2>Contact</h2>
        <p>
          For more information, contact the&nbsp;<router-link :to="{name:'apply'}"><a href="#">Basic Income Pilot Programe</a></router-link>.
        </p>
        <nav class="mrgn-bttm-lg mrgn-tp-lg">
          <h3 class="wb-inv">Document navigation</h3>
          <ul class="pager">

          </ul>
        </nav>
      </section>
    </div>
    <div class="mwsgeneric-base-html parbase section">
      <div class="row row-no-gutters mrgn-tp-xl gc-subway-section-end">
        <!--Start of Feedback widget code-->
        <div class="col-sm-7 col-lg-6">
          <figure class="gc-pg-hlpfl provisional well mrgn-bttm-0" aria-live="polite">
            <figcaption class="wb-inv">Page feedback</figcaption>
            <form
                autocomplete="off"
                class="provisional wb-postback wb-init wb-postback-inited"
                data-wb-postback='{"success":".gc-pg-hlpfl-thnk","content":"#gc-pg-hlpfl-frm"}'
            >
              <input
                  type="hidden"
                  name="institutionopt"
                  value="Employment and Social Development Canada"
              />
              <!--Update the values-->
              <input type="hidden" name="themeopt" value="Social Insurance Number (SIN)" />
              <input type="hidden" name="sectionopt" value="Employment Insurance" />
              <input type="hidden" name="pageTitle" value="SIN Overview" />
              <!--End of values that need to be updated-->
              <input type="hidden" name="emailTemplate" value="servcan/gc-pagesuccessen" />
              <fieldset class="gc-pg-hlpfl-btn chkbxrdio-grp row row-no-gutters">
                <legend class="col-xs-12 col-sm-7 col-md-8 mrgn-tp-sm">
                  <span class="field-name">Did you find what you were looking for?</span>
                </legend>
                <div class="col-xs-8 col-sm-5 col-md-4 text-right">
                  <button
                      type="submit"
                      name="helpful"
                      value="Yes"
                      class="btn btn-primary nojs-show pull-right"
                      data-gc-analytics-wtph=""
                      aria-describedby="why-note"
                      style="color: white"
                  >
                    Yes
                  </button>
                  <button
                      type="submit"
                      name="helpful"
                      value="Yes"
                      class="btn btn-primary nojs-hide"
                      data-gc-analytics-wtph=""
                      style="color: white"
                  >
                    Yes
                  </button>
                  <button
                      type="button"
                      class="btn btn-primary mrgn-lft-sm nojs-hide"
                      data-wb-doaction='[
						{"action":"removeClass","source":".gc-pg-hlpfl-no","class":"nojs-show"},
						{"action":"addClass","source":".gc-pg-hlpfl-btn","class":"hide"}
						]'
                      data-gc-analytics-wtph-no=""
                      style="color: red"
                  >
                    No
                  </button>
                </div>
              </fieldset>
              <div class="gc-pg-hlpfl-no nojs-show">
                <p id="why-note" class="nojs-show mrgn-tp-lg mrgn-bttm-md">
                  <strong>If not, tell us why below:</strong>
                </p>
                <div aria-live="off">
                  <fieldset class="chkbxrdio-grp">
                    <legend><span class="field-name">What was wrong?</span></legend>
                    <div class="radio">
                      <label for="problem1">
                        <input
                            name="problem"
                            id="problem1"
                            type="radio"
                            value="I can&#39;t find the information"
                            data-gc-analytics-wtph-value="I can&#39;t find the information-Je ne peux pas trouver l&#39;information"
                            data-gc-analytics-collect="notPrivate"
                        />
                        I can't <strong>find</strong> the information
                      </label>
                    </div>
                    <div class="radio">
                      <label for="problem2">
                        <input
                            name="problem"
                            id="problem2"
                            type="radio"
                            value="The information is hard to understand"
                            data-gc-analytics-wtph-value="The information is hard to understand-L&#39;information est difficile à comprendre"
                            data-gc-analytics-collect="notPrivate"
                        />
                        The information is hard to <strong>understand</strong>
                      </label>
                    </div>
                    <div class="radio">
                      <label for="problem3">
                        <input
                            name="problem"
                            id="problem3"
                            type="radio"
                            value="There was an error / something didn&#39;t work"
                            data-gc-analytics-wtph-value="There was an error or something didn&#39;t work-Il y avait une erreur ou quelque chose ne fonctionnait pas"
                            data-gc-analytics-collect="notPrivate"
                        />
                        There was an error or something <strong>didn't work</strong>
                      </label>
                    </div>
                    <div class="radio">
                      <label for="problem4">
                        <input
                            name="problem"
                            id="problem4"
                            type="radio"
                            value="Other reason"
                            data-gc-analytics-wtph-value="Other reason-Autre raison"
                            data-gc-analytics-collect="notPrivate"
                        />
                        Other reason
                      </label>
                    </div>
                  </fieldset>
                  <div class="form-group">
                    <label for="problem6" class="mrgn-tp-sm mrgn-bttm-0"
                    ><span class="field-name"
                    >Please provide more details (maximum 300 characters)</span
                    ></label
                    >
                    <textarea
                        id="problem6"
                        aria-describedby="problem6-note"
                        name="details"
                        class="form-control full-width"
                        maxlength="300"
                    ></textarea>
                    <p id="problem6-note">
                      <small
                      >You will not receive a reply. Telephone numbers and email addresses will
                        be removed.</small
                      >
                    </p>
                  </div>
                  <button
                      type="submit"
                      name="helpful"
                      value="No"
                      class="btn btn-primary"
                      data-gc-analytics-wtph-submit=""
                  >
                    Submit
                  </button>
                  <input type="hidden" name="problem" value="" />
                </div>
              </div>
            </form>
            <div class="gc-pg-hlpfl-thnk hide">
              <p class="mrgn-tp-sm mrgn-bttm-0">
                  <span
                      class="far fa-check-circle text-success mrgn-rght-sm"
                      aria-hidden="true"
                  ></span>
                Thank you for your feedback.
              </p>
            </div>
          </figure>
        </div>
        <div class="col-sm-3 col-sm-offset-1 col-lg-offset-3">
          <div
              class="wb-share wb-init wb-share-inited"
              data-wb-share='{"pnlId":"pnlShrPg", "lnkClass": "btn btn-default btn-block mrgn-tp-md"}'
              id="wb-auto-19"
          >
            <section
                id="shr-pg-pnlShrPg"
                class="shr-pg mfp-hide modal-dialog modal-content overlay-def"
            >

              <header class="modal-header">
                <h2 class="modal-title"> <ShareAltOutlined /> Share this page </h2>
              </header>
              <div class="modal-body">

                <p class="col-sm-12 shr-dscl">

                </p>
                <div class="clearfix"></div>
              </div>
            </section>
            <a
                href="##shr-pg-pnlShrPg"
                aria-controls="shr-pg-pnlShrPg"
                class="shr-opn wb-lbx btn btn-default btn-block mrgn-tp-md wb-lbx-inited wb-init"
                id="wb-auto-20"
            ><span class=""><ShareAltOutlined /></span>  Share this page</a
            >
          </div>
        </div>
      </div>
    </div>

    <section class="pagedetails">
      <h2 class="wb-inv">Page details</h2>
      <div class="row">
        <div class="col-xs-12">
          <dl id="wb-dtmd">
            <dt>Date modified:</dt>
            <dd><time property="dateModified">2024-06-20</time></dd>
          </dl>
        </div>
      </div>
    </section>
  </main>

  <div class="newpar new section"></div>

  <div class="par iparys_inherited"></div>

  <div class="newpar new section"></div>

  <div class="par iparys_inherited">
    <div class="global-footer">
      <footer id="wb-info">
        <h2 class="wb-inv">About this site</h2>

        <div class="gc-main-footer">
          <div class="container">
            <nav>
              <h3>Basic Income Program</h3>
              <ul class="list-unstyled colcount-sm-2 colcount-md-3">
                <li><a href="#">All contacts</a></li>
                <li><a href="#">Departments and agencies</a></li>
                <li><a href="#">About government</a></li>
              </ul>
              <h4><span class="wb-inv">Themes and topics</span></h4>
              <ul class="list-unstyled colcount-sm-2 colcount-md-3">
                <li><a href="#">Jobs</a></li>
                <li><a href="#">Immigration and citizenship</a></li>
                <li><a href="#">Travel and tourism</a></li>
                <li><a href="#">Business</a></li>
                <li><a href="#">Benefits</a></li>
                <li><a href="#">Health</a></li>
                <li><a href="#">Taxes</a></li>
                <li><a href="#">Environment and natural resources</a></li>
                <li><a href="#">National security and defence</a></li>
                <li><a href="#">Culture, history and sport</a></li>
                <li><a href="#">Policing, justice and emergencies</a></li>
                <li><a href="#">Transport and infrastructure</a></li>
                <li><a href="#">Canada and the world</a></li>
                <li><a href="#">Money and finance</a></li>
                <li><a href="#">Science and innovation</a></li>
                <li><a href="#">Indigenous peoples</a></li>
                <li><a href="#">Veterans and military</a></li>
                <li><a href="#">Youth</a></li>
              </ul>
            </nav>
          </div>
        </div>
        <div class="gc-sub-footer">
          <div class="container d-flex align-items-center">
            <nav>
              <h3 class="wb-inv">Basic Income Program Corporate</h3>
              <ul>
                <li><a href="#">Social media</a></li>
                <li><a href="#">Mobile applications</a></li>
                <li><a href="#">About Canada.ca</a></li>

                <li><a href="#">Terms and conditions</a></li>
                <li><a href="#">Privacy</a></li>
              </ul>
            </nav>
            <div class="wtrmrk align-self-end">
              <img src="../assets/img/wmms-blk.svg" alt="Symbol of the Basic Income Program" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
  </body>
</template>
<script setup>
import {CaretDownOutlined, SearchOutlined, ShareAltOutlined} from '@ant-design/icons-vue';
</script>
<style lang="scss"></style>
