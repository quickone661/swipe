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
                        >fr</abbr
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
                    alt="Basic Income Pilot"
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

              <form   name="cse-search-box" role="search">
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
                      name="wb-srch-sub"
                  >
                      <span class=""><SearchOutlined /></span
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
                  <span class=""><CaretDownOutlined /></span>
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
              <li>
                <a href=""
                > Canada emergency response benefit</a
                >
              </li>
              <li><a href="#">Who Is It For?</a></li>
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
            <h1 id="gc-document-nav">Basic income Pilot</h1>
            <p class="h3 hidden-xs visible-md visible-lg mrgn-tp-0">Sections</p>
          </hgroup>
          <ul>
            <li>
                <router-link :to="{name:'home'}"> <a href="#" class="hidden-xs hidden-sm">Overview</a> </router-link>
               <router-link :to="{name:'home'}"><a href="#" class="hidden-xs hidden-sm hidden-md hidden-lg">Overview</a></router-link>
               <router-link :to="{name:'home'}"><a href="#" class="visible-xs visible-sm hidden-xs hidden-sm">Overview</a></router-link>
               <router-link :to="{name:'home'}"><a href="#" class="visible-xs visible-sm hidden-md hidden-lg">Overview</a></router-link>
            </li>
            <li>
              <a href="#" class=" active hidden-xs hidden-sm">Who needs basic income</a
              ><a href="#" class="active hidden-xs hidden-sm hidden-md hidden-lg"
            >Who needs basic income</a
            ><a href="#" class=" active visible-xs visible-sm hidden-xs hidden-sm">Who needs basic income</a
            ><a href="#" class=" active visible-xs visible-sm hidden-md hidden-lg"
            >Who needs basic income</a
            >
            </li>
            <li>
               <router-link :to="{name:'application'}"> <a href="#" class=" hidden-xs hidden-sm" aria-current="page" tabindex="0">Apply</a></router-link>
               <router-link :to="{name:'application'}"> <a href="#" class=" hidden-md hidden-lg" aria-current="page" tabindex="0">Apply</a></router-link>
            </li>
            <li>
              <a href="#" class="hidden-xs hidden-sm"
              >emergency response <abbr>Benefit</abbr></a
              ><a href="#" class="hidden-xs hidden-sm hidden-md hidden-lg"
            >emergency response <abbr>Benefit</abbr></a
            ><a href="#" class="visible-xs visible-sm hidden-xs hidden-sm"
            >emergency response <abbr>benefit</abbr></a
            ><a href="##" class="visible-xs visible-sm hidden-md hidden-lg"
            >emergency response <abbr>benefit</abbr></a
            >
            </li>
            <li>
              <a href="#" class="hidden-xs hidden-sm">Disability Support <abbr></abbr></a
              ><a href="##" class="hidden-xs hidden-sm hidden-md hidden-lg"
            >Disability Support <abbr></abbr></a
            ><a href="#" class="visible-xs visible-sm hidden-xs hidden-sm"
            >Disability Support <abbr></abbr></a
            ><a href="##" class="visible-xs visible-sm hidden-md hidden-lg"
            >Disability Support <abbr></abbr></a
            >
            </li>
            <li>
              <a href="#" class="hidden-xs hidden-sm">Universal basic income</a
              ><a href="##" class="hidden-xs hidden-sm hidden-md hidden-lg"
            >Universal basic income</a
            ><a href="#" class="visible-xs visible-sm hidden-xs hidden-sm">Universal basic income</a
            ><a href="##" class="visible-xs visible-sm hidden-md hidden-lg"
            >Universal basic income</a
            >
            </li>
            <li>
              <a href="#" class="hidden-xs hidden-sm">Guaranteed basic income</a
              ><a href="##" class="hidden-xs hidden-sm hidden-md hidden-lg"
            >Guaranteed basic incomes</a
            ><a href="#" class="visible-xs visible-sm hidden-xs hidden-sm">Guaranteed basic income</a
            ><a href="##" class="visible-xs visible-sm hidden-md hidden-lg"
            >Guaranteed basic income</a
            >
            </li>
          </ul>
        </nav>
      </div>
      <section class="gc-subway-section">
        <hgroup>
          <p>Basic Income Pilot</p>
          <h1 property="name" id="" class="gc-thickline">Who needs it?</h1>
        </hgroup>
        <p><strong>emergency response benefit</strong></p>
        <p>
          about 3.7 million people live below the poverty line, according to the 2019 Canada Income Survey.
        </p>
        <p>
          If you need more information or have questions about the Basic Income pilot program, you can:
        </p>
        <ul>
          <li>Visit the Service Canada website for detailed information and updates on the program.</li>
          <li>Contact the Service Canada helpline to speak with a representative who can provide assistance and answer your questions.</li>
          <li> Visit your nearest Service Canada office for in-person support and guidance.</li>
        </ul>
        <p>
          We are committed to providing support and guidance to all participants throughout the duration of the pilot program. Your feedback and experiences are invaluable to us as we work towards creating a more equitable and stable economic future for all Canadians.
        </p>

        <h2><strong>Goals and Expected Outcomes.</strong></h2>
        <p>
          The Basic Income pilot program aims to achieve several key outcomes:
        </p>
        <strong>Reduction in Poverty</strong>
        <p>By providing a guaranteed income, the program seeks to lift participants out of poverty and provide a more stable economic foundation.</p>
        <strong>Simplification of Social Services</strong>
        <p>
          The program intends to streamline the social safety net, reducing the complexity and administrative burden of multiple welfare programs.
        </p>
        <strong>Economic Stability</strong>
        <p>
          With a reliable source of income, participants are expected to experience less financial stress, which can lead to better mental and physical health, increased productivity, and greater opportunities for personal development.
        </p>
        <h2>Canadians applying for themselves</h2>
        <p>persons who are 18 years of age or older may apply for their own BIPP.</p>
        <p>
          When the federal government launched the Canada emergency response benefit (CERB) last year, it left some wondering whether it could lead to a lasting framework for a national basic income program — one that would help lift struggling Canadians out of poverty.
        </p>
        <h2>Enhanced Data Collection</h2>
        <p>
          The pilot program will provide valuable data on the impact of basic income, helping to inform future policy decisions and potential expansions of the program.
        </p>
        <div class="nojs-show">
          <p>
            Please visit the BIPP <a href="#">required documents</a> page for detailed information
            about all required documents, examples, translation requirements and useful links.
          </p>
        </div>
        <section
            class="wb-frmvld nojs-hide wb-init wb-frmvld-inited wb-fieldflow-form"
            id="wb-auto-5"
        >
          <h2>Apply for a Basic Income Pilot</h2>
          <form novalidate="novalidate">
            <div
                class="gc-font-2019 wb-fieldflow wb-init wb-fieldflow-inited hidden"
                data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }}'
                id="wb-auto-6"
            >
              <p>
                To find out which documents you must provide, select the scenario that best
                describes your situation
              </p>
              <ul>
                <li id="wb-auto-9">
                  You are applying for yourself
                  <div
                      class="wb-fieldflow-sub"
                      data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }}'
                      id="wb-auto-8"
                  >
                    <p>Select your status in Canada</p>
                    <ul>
                      <li id="wb-auto-25">
                        You are a Canadian citizen
                        <div
                            class="wb-fieldflow-sub"
                            data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }, "default": [{"action":"addClass", "source":".fill", "class":"hidden","live":true}, {"action":"removeClass", "class":"hidden", "source": "#exit","live":true}], "base": {"action":"removeClass", "class":"hidden","live":true}}'
                            id="wb-auto-24"
                        >
                          <p>How would you like to apply?</p>
                          <ul>
                            <li
                                data-wb-fieldflow='{ "source": ".yourself, .yourself-canadian, .secondary, .online" }'
                                id="wb-auto-75"
                            >
                              Online
                            </li>
                            <li
                                data-wb-fieldflow='{ "source": ".yourself, .yourself-canadian, .mail" }'
                                id="wb-auto-76"
                            >
                              By mail
                            </li>
                            <li
                                data-wb-fieldflow='{ "source": ".yourself, .yourself-canadian, .secondary, .inperson" }'
                                id="wb-auto-77"
                            >
                              In person
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li id="wb-auto-27">
                        You are a permanent resident
                        <div
                            class="wb-fieldflow-sub"
                            data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }, "default": [{"action":"addClass", "source":".fill", "class":"hidden","live":true}, {"action":"removeClass", "class":"hidden", "source": "#exit","live":true}], "base": {"action":"removeClass", "class":"hidden","live":true}}'
                            id="wb-auto-26"
                        >
                          <p>How would you like to apply?</p>
                          <ul>
                            <li
                                data-wb-fieldflow='{ "source": ".yourself, .yourself-permanent, .secondary, .online" }'
                                id="wb-auto-82"
                            >
                              Online
                            </li>
                            <li
                                data-wb-fieldflow='{ "source": ".yourself, .yourself-permanent, .mail" }'
                                id="wb-auto-83"
                            >
                              By mail
                            </li>
                            <li
                                data-wb-fieldflow='{ "source": ".yourself, .yourself-permanent, .secondary, .inperson" }'
                                id="wb-auto-84"
                            >
                              In person
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li id="wb-auto-29">
                        You are a temporary resident
                        <div
                            class="wb-fieldflow-sub"
                            data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }, "default": [{"action":"addClass", "source":".fill", "class":"hidden","live":true}, {"action":"removeClass", "class":"hidden", "source": "#exit","live":true}], "base": {"action":"removeClass", "class":"hidden","live":true}}'
                            id="wb-auto-28"
                        >
                          <p>How would you like to apply?</p>
                          <ul>
                            <li
                                data-wb-fieldflow='{ "source": ".yourself, .yourself-temporary, .secondary, .online" }'
                                id="wb-auto-89"
                            >
                              Online
                            </li>
                            <li
                                data-wb-fieldflow='{ "source": ".yourself, .yourself-temporary, .mail" }'
                                id="wb-auto-90"
                            >
                              By mail
                            </li>
                            <li
                                data-wb-fieldflow='{ "source": ".yourself, .yourself-temporary, .secondary, .inperson" }'
                                id="wb-auto-91"
                            >
                              In person
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li id="wb-auto-31">
                        You are an individual born outside Canada who is registered under the
                        Indian Act
                        <div
                            class="wb-fieldflow-sub"
                            data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }, "default": [{"action":"addClass", "source":".fill", "class":"hidden","live":true}, {"action":"removeClass", "class":"hidden", "source": "#exit","live":true}], "base": {"action":"removeClass", "class":"hidden","live":true}}'
                            id="wb-auto-30"
                        >
                          <p>How would you like to apply?</p>
                          <ul>
                            <li
                                data-wb-fieldflow='{ "source": ".yourself, .yourself-indian-act, .secondary, .online" }'
                                id="wb-auto-96"
                            >
                              Online
                            </li>
                            <li
                                data-wb-fieldflow='{ "source": ".yourself, .yourself-indian-act, .mail" }'
                                id="wb-auto-97"
                            >
                              By mail
                            </li>
                            <li
                                data-wb-fieldflow='{ "source": ".yourself, .yourself-indian-act, .secondary, .inperson" }'
                                id="wb-auto-98"
                            >
                              In person
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li id="wb-auto-33">
                        You are an individual residing outside Canada with no legal status in
                        Canada
                        <div
                            class="wb-fieldflow-sub"
                            data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }, "default": [{"action":"addClass", "source":".fill", "class":"hidden","live":true}, {"action":"removeClass", "class":"hidden", "source": "#exit","live":true}], "base": {"action":"removeClass", "class":"hidden","live":true}}'
                            id="wb-auto-32"
                        >
                          <p>How would you like to apply?</p>
                          <ul>
                            <li
                                data-wb-fieldflow='{ "source": ".yourself, .yourself-no-legal, .secondary, .online" }'
                                id="wb-auto-103"
                            >
                              Online
                            </li>
                            <li
                                data-wb-fieldflow='{ "source": ".yourself, .yourself-no-legal, .mail" }'
                                id="wb-auto-104"
                            >
                              By mail
                            </li>
                            <li
                                data-wb-fieldflow='{ "source": ".yourself, .yourself-no-legal, .secondary, .inperson" }'
                                id="wb-auto-105"
                            >
                              In person
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li id="wb-auto-11">
                  You are a parent or legal guardian applying on behalf of a minor or a dependent
                  adult child
                  <div
                      class="wb-fieldflow-sub"
                      data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }}'
                      id="wb-auto-10"
                  >
                    <p>Select your status in Canada</p>
                    <ul>
                      <li id="wb-auto-41">
                        You are a Canadian citizen
                        <div
                            class="wb-fieldflow-sub"
                            data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }}'
                            id="wb-auto-40"
                        >
                          <p>Select the child’s status in Canada</p>
                          <ul>
                            <li>
                              The child is a Canadian citizen
                              <div
                                  class="wb-fieldflow-sub"
                                  data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }, "default": [{"action":"addClass", "source":".fill", "class":"hidden","live":true}, {"action":"removeClass", "class":"hidden", "source": "#exit","live":true}], "base": {"action":"removeClass", "class":"hidden","live":true}}'
                              >
                                <p>How would you like to apply?</p>
                                <ul>
                                  <li
                                      data-wb-fieldflow='{ "source": ".minor, .yourself-canadian, .requestor-canadian, .secondary, .online" }'
                                  >
                                    Online
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".minor, .yourself-canadian, .requestor-canadian, .mail" }'
                                  >
                                    By mail
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".minor, .yourself-canadian, .requestor-canadian, .secondary, .inperson" }'
                                  >
                                    In person
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              The child is a permanent resident
                              <div
                                  class="wb-fieldflow-sub"
                                  data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }, "default": [{"action":"addClass", "source":".fill", "class":"hidden","live":true}, {"action":"removeClass", "class":"hidden", "source": "#exit","live":true}], "base": {"action":"removeClass", "class":"hidden","live":true}}'
                              >
                                <p>How would you like to apply?</p>
                                <ul>
                                  <li
                                      data-wb-fieldflow='{ "source": ".minor, .yourself-canadian, .requestor-permanent, .secondary, .online" }'
                                  >
                                    Online
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".minor, .yourself-canadian, .requestor-permanent, .mail" }'
                                  >
                                    By mail
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".minor, .yourself-canadian, .requestor-permanent, .secondary, .inperson" }'
                                  >
                                    In person
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              The child is a temporary resident
                              <div
                                  class="wb-fieldflow-sub"
                                  data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }, "default": [{"action":"addClass", "source":".fill", "class":"hidden","live":true}, {"action":"removeClass", "class":"hidden", "source": "#exit","live":true}], "base": {"action":"removeClass", "class":"hidden","live":true}}'
                              >
                                <p>How would you like to apply?</p>
                                <ul>
                                  <li
                                      data-wb-fieldflow='{ "source": ".minor, .yourself-canadian, .requestor-temporary, .secondary, .online" }'
                                  >
                                    Online
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".minor, .yourself-canadian, .requestor-temporary, .mail" }'
                                  >
                                    By mail
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".minor, .yourself-canadian, .requestor-temporary, .secondary, .inperson" }'
                                  >
                                    In person
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              The child is an individual born outside Canada who is registered
                              under the Indian Act
                              <div
                                  class="wb-fieldflow-sub"
                                  data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }, "default": [{"action":"addClass", "source":".fill", "class":"hidden","live":true}, {"action":"removeClass", "class":"hidden", "source": "#exit","live":true}], "base": {"action":"removeClass", "class":"hidden","live":true}}'
                              >
                                <p>How would you like to apply?</p>
                                <ul>
                                  <li
                                      data-wb-fieldflow='{ "source": ".minor, .yourself-canadian, .requestor-indian-act, .secondary, .online" }'
                                  >
                                    Online
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".minor, .yourself-canadian, .requestor-indian-act, .mail" }'
                                  >
                                    By mail
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".minor, .yourself-canadian, .requestor-indian-act, .secondary, .inperson" }'
                                  >
                                    In person
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              The child is an individual residing outside Canada with no legal
                              status in Canada
                              <div
                                  class="wb-fieldflow-sub"
                                  data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }, "default": [{"action":"addClass", "source":".fill", "class":"hidden","live":true}, {"action":"removeClass", "class":"hidden", "source": "#exit","live":true}], "base": {"action":"removeClass", "class":"hidden","live":true}}'
                              >
                                <p>How would you like to apply?</p>
                                <ul>
                                  <li
                                      data-wb-fieldflow='{ "source": ".minor, .yourself-canadian, .requestor-no-legal, .secondary, .online" }'
                                  >
                                    Online
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".minor, .yourself-canadian, .requestor-no-legal, .mail" }'
                                  >
                                    By mail
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".minor, .yourself-canadian, .requestor-no-legal, .secondary, .inperson" }'
                                  >
                                    In person
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li id="wb-auto-43">
                        You are a permanent resident
                        <div
                            class="wb-fieldflow-sub"
                            data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }}'
                            id="wb-auto-42"
                        >
                          <p>Select the child’s status in Canada</p>
                          <ul>
                            <li>
                              The child is a Canadian citizen
                              <div
                                  class="wb-fieldflow-sub"
                                  data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }, "default": [{"action":"addClass", "source":".fill", "class":"hidden","live":true}, {"action":"removeClass", "class":"hidden", "source": "#exit","live":true}], "base": {"action":"removeClass", "class":"hidden","live":true}}'
                              >
                                <p>How would you like to apply?</p>
                                <ul>
                                  <li
                                      data-wb-fieldflow='{ "source": ".minor, .yourself-permanent, .requestor-canadian, .secondary, .online" }'
                                  >
                                    Online
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".minor, .yourself-permanent, .requestor-canadian, .mail" }'
                                  >
                                    By mail
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".minor, .yourself-permanent, .requestor-canadian, .secondary, .inperson" }'
                                  >
                                    In person
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              The child is a permanent resident
                              <div
                                  class="wb-fieldflow-sub"
                                  data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }, "default": [{"action":"addClass", "source":".fill", "class":"hidden","live":true}, {"action":"removeClass", "class":"hidden", "source": "#exit","live":true}], "base": {"action":"removeClass", "class":"hidden","live":true}}'
                              >
                                <p>How would you like to apply?</p>
                                <ul>
                                  <li
                                      data-wb-fieldflow='{ "source": ".minor, .yourself-permanent, .requestor-permanent, .secondary, .online" }'
                                  >
                                    Online
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".minor, .yourself-permanent, .requestor-permanent, .mail" }'
                                  >
                                    By mail
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".minor, .yourself-permanent, .requestor-permanent, .secondary, .inperson" }'
                                  >
                                    In person
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              The child is a temporary resident
                              <div
                                  class="wb-fieldflow-sub"
                                  data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }, "default": [{"action":"addClass", "source":".fill", "class":"hidden","live":true}, {"action":"removeClass", "class":"hidden", "source": "#exit","live":true}], "base": {"action":"removeClass", "class":"hidden","live":true}}'
                              >
                                <p>How would you like to apply?</p>
                                <ul>
                                  <li
                                      data-wb-fieldflow='{ "source": ".minor, .yourself-permanent, .requestor-temporary, .secondary, .online" }'
                                  >
                                    Online
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".minor, .yourself-permanent, .requestor-temporary, .mail" }'
                                  >
                                    By mail
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".minor, .yourself-permanent, .requestor-temporary, .secondary, .inperson" }'
                                  >
                                    In person
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              The child is an individual born outside Canada who is registered
                              under the Indian Act
                              <div
                                  class="wb-fieldflow-sub"
                                  data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }, "default": [{"action":"addClass", "source":".fill", "class":"hidden","live":true}, {"action":"removeClass", "class":"hidden", "source": "#exit","live":true}], "base": {"action":"removeClass", "class":"hidden","live":true}}'
                              >
                                <p>How would you like to apply?</p>
                                <ul>
                                  <li
                                      data-wb-fieldflow='{ "source": ".minor, .yourself-permanent, .requestor-indian-act, .secondary, .online" }'
                                  >
                                    Online
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".minor, .yourself-permanent, .requestor-indian-act, .mail" }'
                                  >
                                    By mail
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".minor, .yourself-permanent, .requestor-indian-act, .secondary, .inperson" }'
                                  >
                                    In person
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              The child is an individual residing outside Canada with no legal
                              status in Canada
                              <div
                                  class="wb-fieldflow-sub"
                                  data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }, "default": [{"action":"addClass", "source":".fill", "class":"hidden","live":true}, {"action":"removeClass", "class":"hidden", "source": "#exit","live":true}], "base": {"action":"removeClass", "class":"hidden","live":true}}'
                              >
                                <p>How would you like to apply?</p>
                                <ul>
                                  <li
                                      data-wb-fieldflow='{ "source": ".minor, .yourself-permanent, .requestor-no-legal, .secondary, .online" }'
                                  >
                                    Online
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".minor, .yourself-permanent, .requestor-no-legal, .mail" }'
                                  >
                                    By mail
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".minor, .yourself-permanent, .requestor-no-legal, .secondary, .inperson" }'
                                  >
                                    In person
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li id="wb-auto-45">
                        You are an individual born outside Canada who is registered under the
                        Indian Act
                        <div
                            class="wb-fieldflow-sub"
                            data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }}'
                            id="wb-auto-44"
                        >
                          <p>Select the child’s status in Canada</p>
                          <ul>
                            <li>
                              The child is a Canadian citizen
                              <div
                                  class="wb-fieldflow-sub"
                                  data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }, "default": [{"action":"addClass", "source":".fill", "class":"hidden","live":true}, {"action":"removeClass", "class":"hidden", "source": "#exit","live":true}], "base": {"action":"removeClass", "class":"hidden","live":true}}'
                              >
                                <p>How would you like to apply?</p>
                                <ul>
                                  <li
                                      data-wb-fieldflow='{ "source": ".minor, .yourself-indian-act, .requestor-canadian, .secondary, .online" }'
                                  >
                                    Online
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".minor, .yourself-indian-act, .requestor-canadian, .mail" }'
                                  >
                                    By mail
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".minor, .yourself-indian-act, .requestor-canadian, .secondary, .inperson" }'
                                  >
                                    In person
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              The child is a permanent resident
                              <div
                                  class="wb-fieldflow-sub"
                                  data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }, "default": [{"action":"addClass", "source":".fill", "class":"hidden","live":true}, {"action":"removeClass", "class":"hidden", "source": "#exit","live":true}], "base": {"action":"removeClass", "class":"hidden","live":true}}'
                              >
                                <p>How would you like to apply?</p>
                                <ul>
                                  <li
                                      data-wb-fieldflow='{ "source": ".minor, .yourself-indian-act, .requestor-permanent, .secondary, .online" }'
                                  >
                                    Online
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".minor, .yourself-indian-act, .requestor-permanent, .mail" }'
                                  >
                                    By mail
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".minor, .yourself-indian-act, .requestor-permanent, .secondary, .inperson" }'
                                  >
                                    In person
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              The child is a temporary resident
                              <div
                                  class="wb-fieldflow-sub"
                                  data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }, "default": [{"action":"addClass", "source":".fill", "class":"hidden","live":true}, {"action":"removeClass", "class":"hidden", "source": "#exit","live":true}], "base": {"action":"removeClass", "class":"hidden","live":true}}'
                              >
                                <p>How would you like to apply?</p>
                                <ul>
                                  <li
                                      data-wb-fieldflow='{ "source": ".minor, .yourself-indian-act, .requestor-temporary, .secondary, .online" }'
                                  >
                                    Online
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".minor, .yourself-indian-act, .requestor-temporary, .mail" }'
                                  >
                                    By mail
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".minor, .yourself-indian-act, .requestor-temporary, .secondary, .inperson" }'
                                  >
                                    In person
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              The child is an individual born outside Canada who is registered
                              under the Indian Act
                              <div
                                  class="wb-fieldflow-sub"
                                  data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }, "default": [{"action":"addClass", "source":".fill", "class":"hidden","live":true}, {"action":"removeClass", "class":"hidden", "source": "#exit","live":true}], "base": {"action":"removeClass", "class":"hidden","live":true}}'
                              >
                                <p>How would you like to apply?</p>
                                <ul>
                                  <li
                                      data-wb-fieldflow='{ "source": ".minor, .yourself-indian-act, .requestor-indian-act, .secondary, .online" }'
                                  >
                                    Online
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".minor, .yourself-indian-act, .requestor-indian-act, .mail" }'
                                  >
                                    By mail
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".minor, .yourself-indian-act, .requestor-indian-act, .secondary, .inperson" }'
                                  >
                                    In person
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              The child is an individual residing outside Canada with no legal
                              status in Canada
                              <div
                                  class="wb-fieldflow-sub"
                                  data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }, "default": [{"action":"addClass", "source":".fill", "class":"hidden","live":true}, {"action":"removeClass", "class":"hidden", "source": "#exit","live":true}], "base": {"action":"removeClass", "class":"hidden","live":true}}'
                              >
                                <p>How would you like to apply?</p>
                                <ul>
                                  <li
                                      data-wb-fieldflow='{ "source": ".minor, .yourself-indian-act, .requestor-no-legal, .secondary, .online" }'
                                  >
                                    Online
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".minor, .yourself-indian-act, .requestor-no-legal, .mail" }'
                                  >
                                    By mail
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".minor, .yourself-indian-act, .requestor-no-legal, .secondary, .inperson" }'
                                  >
                                    In person
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li id="wb-auto-47">
                        You are a temporary resident
                        <div
                            class="wb-fieldflow-sub"
                            data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }}'
                            id="wb-auto-46"
                        >
                          <p>Select the child’s status in Canada</p>
                          <ul>
                            <li>
                              The child is a Canadian citizen
                              <div
                                  class="wb-fieldflow-sub"
                                  data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }, "default": [{"action":"addClass", "source":".fill", "class":"hidden","live":true}, {"action":"removeClass", "class":"hidden", "source": "#exit","live":true}], "base": {"action":"removeClass", "class":"hidden","live":true}}'
                              >
                                <p>How would you like to apply?</p>
                                <ul>
                                  <li
                                      data-wb-fieldflow='{ "source": ".minor, .yourself-temporary, .expired-sin, .requestor-canadian, .secondary, .online" }'
                                  >
                                    Online
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".minor, .yourself-temporary, .expired-sin, .requestor-canadian, .mail" }'
                                  >
                                    By mail
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".minor, .yourself-temporary, .expired-sin, .requestor-canadian, .secondary, .inperson" }'
                                  >
                                    In person
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              The child is a permanent resident
                              <div
                                  class="wb-fieldflow-sub"
                                  data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }, "default": [{"action":"addClass", "source":".fill", "class":"hidden","live":true}, {"action":"removeClass", "class":"hidden", "source": "#exit","live":true}], "base": {"action":"removeClass", "class":"hidden","live":true}}'
                              >
                                <p>How would you like to apply?</p>
                                <ul>
                                  <li
                                      data-wb-fieldflow='{ "source": ".minor, .yourself-temporary, .expired-sin, .requestor-permanent, .secondary, .online" }'
                                  >
                                    Online
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".minor, .yourself-temporary, .expired-sin, .requestor-permanent, .mail" }'
                                  >
                                    By mail
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".minor, .yourself-temporary, .expired-sin, .requestor-permanent, .secondary, .inperson" }'
                                  >
                                    In person
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              The child is a temporary resident
                              <div
                                  class="wb-fieldflow-sub"
                                  data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }, "default": [{"action":"addClass", "source":".fill", "class":"hidden","live":true}, {"action":"removeClass", "class":"hidden", "source": "#exit","live":true}], "base": {"action":"removeClass", "class":"hidden","live":true}}'
                              >
                                <p>How would you like to apply?</p>
                                <ul>
                                  <li
                                      data-wb-fieldflow='{ "source": ".minor, .yourself-temporary, .expired-sin, .requestor-temporary, .secondary, .online" }'
                                  >
                                    Online
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".minor, .yourself-temporary, .expired-sin, .requestor-temporary, .mail" }'
                                  >
                                    By mail
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".minor, .yourself-temporary, .expired-sin, .requestor-temporary, .secondary, .inperson" }'
                                  >
                                    In person
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              The child is an individual born outside Canada who is registered
                              under the Indian Act
                              <div
                                  class="wb-fieldflow-sub"
                                  data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }, "default": [{"action":"addClass", "source":".fill", "class":"hidden","live":true}, {"action":"removeClass", "class":"hidden", "source": "#exit","live":true}], "base": {"action":"removeClass", "class":"hidden","live":true}}'
                              >
                                <p>How would you like to apply?</p>
                                <ul>
                                  <li
                                      data-wb-fieldflow='{ "source": ".minor, .yourself-temporary, .expired-sin, .requestor-indian-act, .secondary, .online" }'
                                  >
                                    Online
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".minor, .yourself-temporary, .expired-sin, .requestor-indian-act, .mail" }'
                                  >
                                    By mail
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".minor, .yourself-temporary, .expired-sin, .requestor-indian-act, .secondary, .inperson" }'
                                  >
                                    In person
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              The child is an individual residing outside Canada with no legal
                              status in Canada
                              <div
                                  class="wb-fieldflow-sub"
                                  data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }, "default": [{"action":"addClass", "source":".fill", "class":"hidden","live":true}, {"action":"removeClass", "class":"hidden", "source": "#exit","live":true}], "base": {"action":"removeClass", "class":"hidden","live":true}}'
                              >
                                <p>How would you like to apply?</p>
                                <ul>
                                  <li
                                      data-wb-fieldflow='{ "source": ".minor, .yourself-temporary, .expired-sin, .requestor-no-legal, .secondary, .online" }'
                                  >
                                    Online
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".minor, .yourself-temporary, .expired-sin, .requestor-no-legal, .mail" }'
                                  >
                                    By mail
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".minor, .yourself-temporary, .expired-sin, .requestor-no-legal, .secondary, .inperson" }'
                                  >
                                    In person
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li id="wb-auto-13">
                  You are a legal representative applying on behalf of someone else
                  <div
                      class="wb-fieldflow-sub"
                      data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }}'
                      id="wb-auto-12"
                  >
                    <p>Select the represented person’s status in Canada</p>
                    <ul>
                      <li id="wb-auto-54">
                        The represented person is a Canadian citizen
                        <div
                            class="wb-fieldflow-sub"
                            data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }, "default": [{"action":"addClass", "source":".fill", "class":"hidden","live":true}, {"action":"removeClass", "class":"hidden", "source": "#exit","live":true}], "base": {"action":"removeClass", "class":"hidden","live":true}}'
                            id="wb-auto-53"
                        >
                          <p>How would you like to apply?</p>
                          <ul>
                            <li
                                data-wb-fieldflow='{ "source": ".legal, .requestor-canadian, .online" }'
                                id="wb-auto-120"
                            >
                              Online
                            </li>
                            <li
                                data-wb-fieldflow='{ "source": ".legal, .requestor-canadian, .mail" }'
                                id="wb-auto-121"
                            >
                              By mail
                            </li>
                            <li
                                data-wb-fieldflow='{ "source": ".legal, .requestor-canadian, .inperson" }'
                                id="wb-auto-122"
                            >
                              In person
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li id="wb-auto-56">
                        The represented person is a permanent resident
                        <div
                            class="wb-fieldflow-sub"
                            data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }, "default": [{"action":"addClass", "source":".fill", "class":"hidden","live":true}, {"action":"removeClass", "class":"hidden", "source": "#exit","live":true}], "base": {"action":"removeClass", "class":"hidden","live":true}}'
                            id="wb-auto-55"
                        >
                          <p>How would you like to apply?</p>
                          <ul>
                            <li
                                data-wb-fieldflow='{ "source": ".legal, .requestor-permanent, .online" }'
                            >
                              Online
                            </li>
                            <li
                                data-wb-fieldflow='{ "source": ".legal, .requestor-permanent, .mail" }'
                            >
                              By mail
                            </li>
                            <li
                                data-wb-fieldflow='{ "source": ".legal, .requestor-permanent, .inperson" }'
                            >
                              In person
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li id="wb-auto-58">
                        The represented person is a temporary resident
                        <div
                            class="wb-fieldflow-sub"
                            data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }, "default": [{"action":"addClass", "source":".fill", "class":"hidden","live":true}, {"action":"removeClass", "class":"hidden", "source": "#exit","live":true}], "base": {"action":"removeClass", "class":"hidden","live":true}}'
                            id="wb-auto-57"
                        >
                          <p>How would you like to apply?</p>
                          <ul>
                            <li
                                data-wb-fieldflow='{ "source": ".legal, .requestor-temporary, .online" }'
                            >
                              Online
                            </li>
                            <li
                                data-wb-fieldflow='{ "source": ".legal, .requestor-temporary, .mail" }'
                            >
                              By mail
                            </li>
                            <li
                                data-wb-fieldflow='{ "source": ".legal, .requestor-temporary, .inperson" }'
                            >
                              In person
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li id="wb-auto-60">
                        The represented person is an individual born outside Canada who is
                        registered under the Indian Act
                        <div
                            class="wb-fieldflow-sub"
                            data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }, "default": [{"action":"addClass", "source":".fill", "class":"hidden","live":true}, {"action":"removeClass", "class":"hidden", "source": "#exit","live":true}], "base": {"action":"removeClass", "class":"hidden","live":true}}'
                            id="wb-auto-59"
                        >
                          <p>How would you like to apply?</p>
                          <ul>
                            <li
                                data-wb-fieldflow='{ "source": ".legal, .requestor-indian-act, .online" }'
                            >
                              Online
                            </li>
                            <li
                                data-wb-fieldflow='{ "source": ".legal, .requestor-indian-act, .mail" }'
                            >
                              By mail
                            </li>
                            <li
                                data-wb-fieldflow='{ "source": ".legal, .requestor-indian-act, .inperson" }'
                            >
                              In person
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li id="wb-auto-62">
                        The represented person is an individual residing outside Canada with no
                        legal status in Canada
                        <div
                            class="wb-fieldflow-sub"
                            data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }, "default": [{"action":"addClass", "source":".fill", "class":"hidden","live":true}, {"action":"removeClass", "class":"hidden", "source": "#exit","live":true}], "base": {"action":"removeClass", "class":"hidden","live":true}}'
                            id="wb-auto-61"
                        >
                          <p>How would you like to apply?</p>
                          <ul>
                            <li
                                data-wb-fieldflow='{ "source": ".legal, .requestor-no-legal, .online" }'
                            >
                              Online
                            </li>
                            <li
                                data-wb-fieldflow='{ "source": ".legal, .requestor-no-legal, .mail" }'
                            >
                              By mail
                            </li>
                            <li
                                data-wb-fieldflow='{ "source": ".legal, .requestor-no-legal, .inperson" }'
                            >
                              In person
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li id="wb-auto-15">
                  You are a legal representative of an estate requesting a confirmation of BIPP for
                  a deceased person
                  <div
                      class="wb-fieldflow-sub"
                      data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }}'
                      id="wb-auto-14"
                  >
                    <p>Select your status in Canada</p>
                    <ul>
                      <li>
                        You are a Canadian citizen
                        <div
                            class="wb-fieldflow-sub"
                            data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }}'
                        >
                          <p>Select the deceased person’s status in Canada</p>
                          <ul>
                            <li>
                              The deceased person was a Canadian citizen
                              <div
                                  class="wb-fieldflow-sub"
                                  data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }, "default": [{"action":"addClass", "source":".fill", "class":"hidden","live":true}, {"action":"removeClass", "class":"hidden", "source": "#exit","live":true}], "base": {"action":"removeClass", "class":"hidden","live":true}}'
                              >
                                <p>How would you like to apply?</p>
                                <ul>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-canadian, .requestor-canadian, .online" }'
                                  >
                                    Online
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-canadian, .requestor-canadian, .mail" }'
                                  >
                                    By mail
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-canadian, .requestor-canadian, .inperson" }'
                                  >
                                    In person
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              The deceased person was a permanent resident
                              <div
                                  class="wb-fieldflow-sub"
                                  data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }, "default": [{"action":"addClass", "source":".fill", "class":"hidden","live":true}, {"action":"removeClass", "class":"hidden", "source": "#exit","live":true}], "base": {"action":"removeClass", "class":"hidden","live":true}}'
                              >
                                <p>How would you like to apply?</p>
                                <ul>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-canadian, .requestor-permanent, .online" }'
                                  >
                                    Online
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-canadian, .requestor-permanent, .mail" }'
                                  >
                                    By mail
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-canadian, .requestor-permanent, .inperson" }'
                                  >
                                    In person
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              The deceased person was a temporary resident
                              <div
                                  class="wb-fieldflow-sub"
                                  data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }, "default": [{"action":"addClass", "source":".fill", "class":"hidden","live":true}, {"action":"removeClass", "class":"hidden", "source": "#exit","live":true}], "base": {"action":"removeClass", "class":"hidden","live":true}}'
                              >
                                <p>How would you like to apply?</p>
                                <ul>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-canadian, .requestor-temporary, .online" }'
                                  >
                                    Online
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-canadian, .requestor-temporary, .mail" }'
                                  >
                                    By mail
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-canadian, .requestor-temporary, .inperson" }'
                                  >
                                    In person
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              The deceased person was an individual born outside Canada who is
                              registered under the Indian Act
                              <div
                                  class="wb-fieldflow-sub"
                                  data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }, "default": [{"action":"addClass", "source":".fill", "class":"hidden","live":true}, {"action":"removeClass", "class":"hidden", "source": "#exit","live":true}], "base": {"action":"removeClass", "class":"hidden","live":true}}'
                              >
                                <p>How would you like to apply?</p>
                                <ul>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-canadian, .requestor-indian-act, .online" }'
                                  >
                                    Online
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-canadian, .requestor-indian-act, .mail" }'
                                  >
                                    By mail
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-canadian, .requestor-indian-act, .inperson" }'
                                  >
                                    In person
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              The deceased person was an individual residing outside Canada with
                              no legal status in Canada
                              <div
                                  class="wb-fieldflow-sub"
                                  data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }, "default": [{"action":"addClass", "source":".fill", "class":"hidden","live":true}, {"action":"removeClass", "class":"hidden", "source": "#exit","live":true}], "base": {"action":"removeClass", "class":"hidden","live":true}}'
                              >
                                <p>How would you like to apply?</p>
                                <ul>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-canadian, .requestor-no-legal, .online" }'
                                  >
                                    Online
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-canadian, .requestor-no-legal, .mail" }'
                                  >
                                    By mail
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-canadian, .requestor-no-legal, .inperson" }'
                                  >
                                    In person
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        You are a permanent resident
                        <div
                            class="wb-fieldflow-sub"
                            data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }}'
                        >
                          <p>Select the deceased person’s status in Canada</p>
                          <ul>
                            <li>
                              The deceased person was a Canadian citizen
                              <div
                                  class="wb-fieldflow-sub"
                                  data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }, "default": [{"action":"addClass", "source":".fill", "class":"hidden","live":true}, {"action":"removeClass", "class":"hidden", "source": "#exit","live":true}], "base": {"action":"removeClass", "class":"hidden","live":true}}'
                              >
                                <p>How would you like to apply?</p>
                                <ul>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-permanent, .requestor-canadian, .online" }'
                                  >
                                    Online
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-permanent, .requestor-canadian, .mail" }'
                                  >
                                    By mail
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-permanent, .requestor-canadian, .inperson" }'
                                  >
                                    In person
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              The deceased person was a permanent resident
                              <div
                                  class="wb-fieldflow-sub"
                                  data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }, "default": [{"action":"addClass", "source":".fill", "class":"hidden","live":true}, {"action":"removeClass", "class":"hidden", "source": "#exit","live":true}], "base": {"action":"removeClass", "class":"hidden","live":true}}'
                              >
                                <p>How would you like to apply?</p>
                                <ul>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-permanent, .requestor-permanent, .online" }'
                                  >
                                    Online
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-permanent, .requestor-permanent, .mail" }'
                                  >
                                    By mail
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-permanent, .requestor-permanent, .inperson" }'
                                  >
                                    In person
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              The deceased person was a temporary resident
                              <div
                                  class="wb-fieldflow-sub"
                                  data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }, "default": [{"action":"addClass", "source":".fill", "class":"hidden","live":true}, {"action":"removeClass", "class":"hidden", "source": "#exit","live":true}], "base": {"action":"removeClass", "class":"hidden","live":true}}'
                              >
                                <p>How would you like to apply?</p>
                                <ul>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-permanent, .requestor-temporary, .online" }'
                                  >
                                    Online
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-permanent, .requestor-temporary, .mail" }'
                                  >
                                    By mail
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-permanent, .requestor-temporary, .inperson" }'
                                  >
                                    In person
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              The deceased person was an individual born outside Canada who is
                              registered under the Indian Act
                              <div
                                  class="wb-fieldflow-sub"
                                  data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }, "default": [{"action":"addClass", "source":".fill", "class":"hidden","live":true}, {"action":"removeClass", "class":"hidden", "source": "#exit","live":true}], "base": {"action":"removeClass", "class":"hidden","live":true}}'
                              >
                                <p>How would you like to apply?</p>
                                <ul>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-permanent, .requestor-indian-act, .online" }'
                                  >
                                    Online
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-permanent, .requestor-indian-act, .mail" }'
                                  >
                                    By mail
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-permanent, .requestor-indian-act, .inperson" }'
                                  >
                                    In person
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              The deceased person was an individual residing outside Canada with
                              no legal status in Canada
                              <div
                                  class="wb-fieldflow-sub"
                                  data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }, "default": [{"action":"addClass", "source":".fill", "class":"hidden","live":true}, {"action":"removeClass", "class":"hidden", "source": "#exit","live":true}], "base": {"action":"removeClass", "class":"hidden","live":true}}'
                              >
                                <p>How would you like to apply?</p>
                                <ul>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-permanent, .requestor-no-legal, .online" }'
                                  >
                                    Online
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-permanent, .requestor-no-legal, .mail" }'
                                  >
                                    By mail
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-permanent, .requestor-no-legal, .inperson" }'
                                  >
                                    In person
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        You are a temporary resident
                        <div
                            class="wb-fieldflow-sub"
                            data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }}'
                        >
                          <p>Select the deceased person’s status in Canada</p>
                          <ul>
                            <li>
                              The deceased person was a Canadian citizen
                              <div
                                  class="wb-fieldflow-sub"
                                  data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }, "default": [{"action":"addClass", "source":".fill", "class":"hidden","live":true}, {"action":"removeClass", "class":"hidden", "source": "#exit","live":true}], "base": {"action":"removeClass", "class":"hidden","live":true}}'
                              >
                                <p>How would you like to apply?</p>
                                <ul>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-temporary, .expired-sin, .requestor-canadian, .online" }'
                                  >
                                    Online
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-temporary, .expired-sin, .requestor-canadian, .mail" }'
                                  >
                                    By mail
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-temporary, .expired-sin, .requestor-canadian, .inperson" }'
                                  >
                                    In person
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              The deceased person was a permanent resident
                              <div
                                  class="wb-fieldflow-sub"
                                  data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }, "default": [{"action":"addClass", "source":".fill", "class":"hidden","live":true}, {"action":"removeClass", "class":"hidden", "source": "#exit","live":true}], "base": {"action":"removeClass", "class":"hidden","live":true}}'
                              >
                                <p>How would you like to apply?</p>
                                <ul>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-temporary, .expired-sin, .requestor-permanent, .online" }'
                                  >
                                    Online
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-temporary, .expired-sin, .requestor-permanent, .mail" }'
                                  >
                                    By mail
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-temporary, .expired-sin, .requestor-permanent, .inperson" }'
                                  >
                                    In person
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              The deceased person was a temporary resident
                              <div
                                  class="wb-fieldflow-sub"
                                  data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }, "default": [{"action":"addClass", "source":".fill", "class":"hidden","live":true}, {"action":"removeClass", "class":"hidden", "source": "#exit","live":true}], "base": {"action":"removeClass", "class":"hidden","live":true}}'
                              >
                                <p>How would you like to apply?</p>
                                <ul>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-temporary, .requestor-temporary, .online" }'
                                  >
                                    Online
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-temporary, .requestor-temporary, .mail" }'
                                  >
                                    By mail
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-temporary, .requestor-temporary, .inperson" }'
                                  >
                                    In person
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              The deceased person was an individual born outside Canada who is
                              registered under the Indian Act
                              <div
                                  class="wb-fieldflow-sub"
                                  data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }, "default": [{"action":"addClass", "source":".fill", "class":"hidden","live":true}, {"action":"removeClass", "class":"hidden", "source": "#exit","live":true}], "base": {"action":"removeClass", "class":"hidden","live":true}}'
                              >
                                <p>How would you like to apply?</p>
                                <ul>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-temporary, .expired-sin, .requestor-indian-act, .online" }'
                                  >
                                    Online
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-temporary, .expired-sin, .requestor-indian-act, .mail" }'
                                  >
                                    By mail
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-temporary, .expired-sin, .requestor-indian-act, .inperson" }'
                                  >
                                    In person
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              The deceased person was an individual residing outside Canada with
                              no legal status in Canada
                              <div
                                  class="wb-fieldflow-sub"
                                  data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }, "default": [{"action":"addClass", "source":".fill", "class":"hidden","live":true}, {"action":"removeClass", "class":"hidden", "source": "#exit","live":true}], "base": {"action":"removeClass", "class":"hidden","live":true}}'
                              >
                                <p>How would you like to apply?</p>
                                <ul>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-temporary, .expired-sin, .requestor-no-legal, .online" }'
                                  >
                                    Online
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-temporary, .expired-sin, .requestor-no-legal, .mail" }'
                                  >
                                    By mail
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-temporary, .expired-sin, .requestor-no-legal, .inperson" }'
                                  >
                                    In person
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        You are an individual born outside Canada who is registered under the
                        Indian Act
                        <div
                            class="wb-fieldflow-sub"
                            data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }}'
                        >
                          <p>Select the deceased person’s status in Canada</p>
                          <ul>
                            <li>
                              The deceased person was a Canadian citizen
                              <div
                                  class="wb-fieldflow-sub"
                                  data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }, "default": [{"action":"addClass", "source":".fill", "class":"hidden","live":true}, {"action":"removeClass", "class":"hidden", "source": "#exit","live":true}], "base": {"action":"removeClass", "class":"hidden","live":true}}'
                              >
                                <p>How would you like to apply?</p>
                                <ul>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-indian-act, .requestor-canadian, .online" }'
                                  >
                                    Online
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-indian-act, .requestor-canadian, .mail" }'
                                  >
                                    By mail
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-indian-act, .requestor-canadian, .inperson" }'
                                  >
                                    In person
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              The deceased person was a permanent resident
                              <div
                                  class="wb-fieldflow-sub"
                                  data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }, "default": [{"action":"addClass", "source":".fill", "class":"hidden","live":true}, {"action":"removeClass", "class":"hidden", "source": "#exit","live":true}], "base": {"action":"removeClass", "class":"hidden","live":true}}'
                              >
                                <p>How would you like to apply?</p>
                                <ul>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-indian-act, .requestor-permanent, .online" }'
                                  >
                                    Online
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-indian-act, .requestor-permanent, .mail" }'
                                  >
                                    By mail
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-indian-act, .requestor-permanent, .inperson" }'
                                  >
                                    In person
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              The deceased person was a temporary resident
                              <div
                                  class="wb-fieldflow-sub"
                                  data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }, "default": [{"action":"addClass", "source":".fill", "class":"hidden","live":true}, {"action":"removeClass", "class":"hidden", "source": "#exit","live":true}], "base": {"action":"removeClass", "class":"hidden","live":true}}'
                              >
                                <p>How would you like to apply?</p>
                                <ul>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-indian-act, .requestor-temporary, .online" }'
                                  >
                                    Online
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-indian-act, .requestor-temporary, .mail" }'
                                  >
                                    By mail
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-indian-act, .requestor-temporary, .inperson" }'
                                  >
                                    In person
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              The deceased person was an individual born outside Canada who is
                              registered under the Indian Act
                              <div
                                  class="wb-fieldflow-sub"
                                  data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }, "default": [{"action":"addClass", "source":".fill", "class":"hidden","live":true}, {"action":"removeClass", "class":"hidden", "source": "#exit","live":true}], "base": {"action":"removeClass", "class":"hidden","live":true}}'
                              >
                                <p>How would you like to apply?</p>
                                <ul>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-indian-act, .requestor-indian-act, .online" }'
                                  >
                                    Online
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-indian-act, .requestor-indian-act, .mail" }'
                                  >
                                    By mail
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-indian-act, .requestor-indian-act, .inperson" }'
                                  >
                                    In person
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              The deceased person was an individual residing outside Canada with
                              no legal status in Canada
                              <div
                                  class="wb-fieldflow-sub"
                                  data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }, "default": [{"action":"addClass", "source":".fill", "class":"hidden","live":true}, {"action":"removeClass", "class":"hidden", "source": "#exit","live":true}], "base": {"action":"removeClass", "class":"hidden","live":true}}'
                              >
                                <p>How would you like to apply?</p>
                                <ul>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-indian-act, .requestor-no-legal, .online" }'
                                  >
                                    Online
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-indian-act, .requestor-no-legal, .mail" }'
                                  >
                                    By mail
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-indian-act, .requestor-no-legal, .inperson" }'
                                  >
                                    In person
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        You are an individual residing outside Canada with no legal status in
                        Canada
                        <div
                            class="wb-fieldflow-sub"
                            data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }}'
                        >
                          <p>Select the deceased person’s status in Canada</p>
                          <ul>
                            <li>
                              The deceased person was a Canadian citizen
                              <div
                                  class="wb-fieldflow-sub"
                                  data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }, "default": [{"action":"addClass", "source":".fill", "class":"hidden","live":true}, {"action":"removeClass", "class":"hidden", "source": "#exit","live":true}], "base": {"action":"removeClass", "class":"hidden","live":true}}'
                              >
                                <p>How would you like to apply?</p>
                                <ul>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-no-legal, .requestor-canadian, .online" }'
                                  >
                                    Online
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-no-legal, .requestor-canadian, .mail" }'
                                  >
                                    By mail
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-no-legal, .requestor-canadian, .inperson" }'
                                  >
                                    In person
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              The deceased person was a permanent resident
                              <div
                                  class="wb-fieldflow-sub"
                                  data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }, "default": [{"action":"addClass", "source":".fill", "class":"hidden","live":true}, {"action":"removeClass", "class":"hidden", "source": "#exit","live":true}], "base": {"action":"removeClass", "class":"hidden","live":true}}'
                              >
                                <p>How would you like to apply?</p>
                                <ul>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-no-legal, .requestor-permanent, .online" }'
                                  >
                                    Online
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-no-legal, .requestor-permanent, .mail" }'
                                  >
                                    By mail
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-no-legal, .requestor-permanent, .inperson" }'
                                  >
                                    In person
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              The deceased person was a temporary resident
                              <div
                                  class="wb-fieldflow-sub"
                                  data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }, "default": [{"action":"addClass", "source":".fill", "class":"hidden","live":true}, {"action":"removeClass", "class":"hidden", "source": "#exit","live":true}], "base": {"action":"removeClass", "class":"hidden","live":true}}'
                              >
                                <p>How would you like to apply?</p>
                                <ul>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-no-legal, .requestor-temporary, .online" }'
                                  >
                                    Online
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-no-legal, .requestor-temporary, .mail" }'
                                  >
                                    By mail
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-no-legal, .requestor-temporary, .inperson" }'
                                  >
                                    In person
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              The deceased person was an individual born outside Canada who is
                              registered under the Indian Act
                              <div
                                  class="wb-fieldflow-sub"
                                  data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }, "default": [{"action":"addClass", "source":".fill", "class":"hidden","live":true}, {"action":"removeClass", "class":"hidden", "source": "#exit","live":true}], "base": {"action":"removeClass", "class":"hidden","live":true}}'
                              >
                                <p>How would you like to apply?</p>
                                <ul>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-no-legal, .requestor-indian-act, .online" }'
                                  >
                                    Online
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-no-legal, .requestor-indian-act, .mail" }'
                                  >
                                    By mail
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-no-legal, .requestor-indian-act, .inperson" }'
                                  >
                                    In person
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              The deceased person was an individual residing outside Canada with
                              no legal status in Canada
                              <div
                                  class="wb-fieldflow-sub"
                                  data-wb-fieldflow='{"noForm": true, "renderas":"radio", "reset": { "action": "addClass", "source":"#exit", "class": "hidden" }, "default": [{"action":"addClass", "source":".fill", "class":"hidden","live":true}, {"action":"removeClass", "class":"hidden", "source": "#exit","live":true}], "base": {"action":"removeClass", "class":"hidden","live":true}}'
                              >
                                <p>How would you like to apply?</p>
                                <ul>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-no-legal, .requestor-no-legal, .online" }'
                                  >
                                    Online
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-no-legal, .requestor-no-legal, .mail" }'
                                  >
                                    By mail
                                  </li>
                                  <li
                                      data-wb-fieldflow='{ "source": ".deceased, .yourself-no-legal, .requestor-no-legal, .inperson" }'
                                  >
                                    In person
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div class="mrgn-tp-md">
              <div id="wb-auto-7">
                <fieldset
                    id="wb-auto-16"
                    data-wb-fieldflow-origin="wb-auto-6"
                    data-wb-fieldflow-source="wb-auto-6"
                    class="wb-fieldflow-init chkbxrdio-grp mrgn-bttm-md"
                >
                  <legend class="required">
                    To find out which documents you must provide, select the scenario that best
                    describes your situation <strong class="required">(required)</strong>
                  </legend>
                  <div class="radio">
                    <label for="wb-auto-17"
                    ><input
                        required="required"
                        data-wb-fieldflow='{"bind":"wb-auto-9","actions":[{"action":"append","srctype":"wb-fieldflow","source":"#wb-auto-8"}]}'
                        value="You are applying for yourself"
                        name="wb-fieldflowwb-auto-1wb-auto-16"
                        type="radio"
                        id="wb-auto-17"
                    />
                      You are applying for yourself
                    </label>
                  </div>
                  <div class="radio">
                    <label for="wb-auto-18"
                    ><input
                        required="required"
                        data-wb-fieldflow='{"bind":"wb-auto-11","actions":[{"action":"append","srctype":"wb-fieldflow","source":"#wb-auto-10"}]}'
                        value="You are a parent or legal guardian applying on behalf of a minor or a dependent adult child"
                        name="wb-fieldflowwb-auto-1wb-auto-16"
                        type="radio"
                        id="wb-auto-18"
                    />
                      You are a parent or legal guardian applying on behalf of a minor or a
                      dependent adult child
                    </label>
                  </div>
                  <div class="radio">
                    <label for="wb-auto-19"
                    ><input
                        required="required"
                        data-wb-fieldflow='{"bind":"wb-auto-13","actions":[{"action":"append","srctype":"wb-fieldflow","source":"#wb-auto-12"}]}'
                        value="You are a legal representative applying on behalf of someone else"
                        name="wb-fieldflowwb-auto-1wb-auto-16"
                        type="radio"
                        id="wb-auto-19"
                    />
                      You are a legal representative applying on behalf of someone else
                    </label>
                  </div>
                  <div class="radio">
                    <label for="wb-auto-20"
                    ><input
                        required="required"
                        data-wb-fieldflow='{"bind":"wb-auto-15","actions":[{"action":"append","srctype":"wb-fieldflow","source":"#wb-auto-14"}]}'
                        value="You are a legal representative of an estate requesting a confirmation of SIN for a deceased person"
                        name="wb-fieldflowwb-auto-1wb-auto-16"
                        type="radio"
                        id="wb-auto-20"
                    />
                      You are a legal representative of an estate requesting a confirmation of BIPP
                      for a deceased person
                    </label>
                  </div>
                </fieldset>
                <fieldset
                    id="wb-auto-114"
                    data-wb-fieldflow-origin="wb-auto-6"
                    data-wb-fieldflow-source="wb-auto-12"
                    class="wb-fieldflow-init chkbxrdio-grp mrgn-bttm-md"
                >
                  <legend class="required">
                    Select the represented person’s status in Canada
                    <strong class="required">(required)</strong>
                  </legend>
                  <div class="radio">
                    <label for="wb-auto-115"
                    ><input
                        required="required"
                        data-wb-fieldflow='{"bind":"wb-auto-54","actions":[{"action":"append","srctype":"wb-fieldflow","source":"#wb-auto-53"}]}'
                        value="The represented person is a Canadian citizen"
                        name="wb-fieldflowwb-auto-1wb-auto-114"
                        type="radio"
                        id="wb-auto-115"
                    />
                      The represented person is a Canadian citizen</label
                    >
                  </div>
                  <div class="radio">
                    <label for="wb-auto-116"
                    ><input
                        required="required"
                        data-wb-fieldflow='{"bind":"wb-auto-56","actions":[{"action":"append","srctype":"wb-fieldflow","source":"#wb-auto-55"}]}'
                        value="The represented person is a permanent resident"
                        name="wb-fieldflowwb-auto-1wb-auto-114"
                        type="radio"
                        id="wb-auto-116"
                    />
                      The represented person is a permanent resident</label
                    >
                  </div>
                  <div class="radio">
                    <label for="wb-auto-117"
                    ><input
                        required="required"
                        data-wb-fieldflow='{"bind":"wb-auto-58","actions":[{"action":"append","srctype":"wb-fieldflow","source":"#wb-auto-57"}]}'
                        value="The represented person is a temporary resident"
                        name="wb-fieldflowwb-auto-1wb-auto-114"
                        type="radio"
                        id="wb-auto-117"
                    />
                      The represented person is a temporary resident</label
                    >
                  </div>
                  <div class="radio">
                    <label for="wb-auto-118"
                    ><input
                        required="required"
                        data-wb-fieldflow='{"bind":"wb-auto-60","actions":[{"action":"append","srctype":"wb-fieldflow","source":"#wb-auto-59"}]}'
                        value="The represented person is an individual born outside Canada who is registered under the Indian Act"
                        name="wb-fieldflowwb-auto-1wb-auto-114"
                        type="radio"
                        id="wb-auto-118"
                    />
                      The represented person is an individual born outside Canada who is
                      registered under the Indian Act</label
                    >
                  </div>
                  <div class="radio">
                    <label for="wb-auto-119"
                    ><input
                        required="required"
                        data-wb-fieldflow='{"bind":"wb-auto-62","actions":[{"action":"append","srctype":"wb-fieldflow","source":"#wb-auto-61"}]}'
                        value="The represented person  is an individual residing outside Canada with no legal status in Canada"
                        name="wb-fieldflowwb-auto-1wb-auto-114"
                        type="radio"
                        id="wb-auto-119"
                    />
                      The represented person is an individual residing outside Canada with no
                      legal status in Canada</label
                    >
                  </div>
                </fieldset>
                <fieldset
                    id="wb-auto-123"
                    data-wb-fieldflow-origin="wb-auto-6"
                    data-wb-fieldflow-source="wb-auto-53"
                    class="wb-fieldflow-init chkbxrdio-grp mrgn-bttm-md"
                >
                  <legend class="required">
                    How would you like to apply? <strong class="required">(required)</strong>
                  </legend>
                  <div class="radio">
                    <label for="wb-auto-124"
                    ><input
                        required="required"
                        data-wb-fieldflow='{"bind":"wb-auto-120","actions":[]}'
                        value="Online"
                        name="wb-fieldflowwb-auto-1wb-auto-123"
                        type="radio"
                        id="wb-auto-124"
                    />
                      Online</label
                    >
                  </div>
                  <div class="radio">
                    <label for="wb-auto-125"
                    ><input
                        required="required"
                        data-wb-fieldflow='{"bind":"wb-auto-121","actions":[]}'
                        value="By mail"
                        name="wb-fieldflowwb-auto-1wb-auto-123"
                        type="radio"
                        id="wb-auto-125"
                    />
                      By mail</label
                    >
                  </div>
                  <div class="radio">
                    <label for="wb-auto-126"
                    ><input
                        required="required"
                        data-wb-fieldflow='{"bind":"wb-auto-122","actions":[]}'
                        value="In person"
                        name="wb-fieldflowwb-auto-1wb-auto-123"
                        type="radio"
                        id="wb-auto-126"
                    />
                      In person</label
                    >
                  </div>
                </fieldset>
              </div>
            </div>
          </form>

          <!--
yourself
minor
legal
deceased

yourself-canadian
yourself-permanent
yourself-temporary
yourself-no-legal
yourself-indian-act

requestor-canadian
requestor-permanent
requestor-temporary
requestor-no-legal
requestor-indian-act

online
mail
inperson

secondary
-->

          <section id="exit" class="hidden extmsg" aria-live="polite">
            <h3>Documents required to apply</h3>
            <div class="alert alert-info">
              <p>All documents must be:</p>
              <ul class="mrgn-bttm-md">
                <li><span class="fill online">digital copies of </span>original documents</li>
                <li class="fill yourself minor legal">valid (not expired)</li>
                <li>
                    <span class="fill online"
                    >clear, legible and complete by showing the entire document including the
                      borders</span
                    ><span class="fill mail inperson">clear and legible</span>;
                </li>
                <li>
                  in English or French (if your document is in another language, please see
                  <a href="#h2.02">translation requirements</a>)
                </li>
              </ul>
            </div>
            <!--		Section for the requestor		-->
            <div>
              <h4>
                Required documents for <span class="fill yourself">yourself</span
              ><span class="fill legal">the legal representative</span
              ><span class="fill minor">the parent or legal guardian</span
              ><span class="fill deceased">the legal representative of the estate</span>:
              </h4>
              <ol class="lst-spcd">
                <li class="fill yourself minor deceased">
                  <p><strong>Primary identity document</strong></p>
                  <div class="fill yourself-canadian">
                    <p>You must provide 1 of the following documents:</p>
                    <ul>
                      <li>
                        birth certificate issued by the vital statistics agency in the province or
                        territory of birth
                      </li>
                      <li>certificate of Canadian Citizenship issued by IRCC or CIC</li>
                      <li>
                        certificate of Registration of Birth Abroad issued by CIC before 1977
                      </li>
                    </ul>
                    <p><strong>Note:</strong></p>
                    <ul>
                      <li>
                        Most original certificates of birth and birth certificates are acceptable
                        to get a BIPP. However, some birth certificates may no longer be considered
                        valid or meet the requirements by the issuing province or meet the
                        requirements for various reasons. The BIPP Program must review the document
                        to determine its validity
                      </li>
                      <li>
                        The BIPP Program does not accept Quebec proof of birth documents issued
                        prior to 1994
                      </li>
                    </ul>
                  </div>
                  <div class="fill yourself-permanent">
                    <p>You must provide 1 of the following documents:</p>
                    <ul>
                      <li>Permanent Resident card issued by IRCC or CIC</li>
                      <li>
                        Confirmation of Permanent Residence (COPR) issued by IRCC
                        <p>
                          Note: If the COPR is used within one year of becoming a permanent
                          resident, it is acceptable. After this period, the Permanent Resident
                          Card is required
                        </p>
                      </li>
                      <li>Record of Landing issued by CIC before June 28, 2002</li>
                    </ul>
                    <details>
                      <summary>
                        <strong>When a Record of Landing or a COPR is not available</strong>
                      </summary>
                      <p>
                        The following may be submitted when the above documents cannot be
                        provided:
                      </p>
                      <ul>
                        <li>Verification of Landing issued by IRCC or CIC</li>
                        <li>Status Verification issued by IRCC or CIC</li>
                      </ul>
                      <p>
                        These documents will only be accepted for making changes to a BIPP record
                        or to get a confirmation of an existing BIPP.
                      </p>
                    </details>
                  </div>
                  <div class="fill yourself-temporary">
                    <p>You must provide 1 of the following documents:</p>
                    <ul>
                      <li>work permit issued by IRCC or CIC</li>
                      <li>
                        study permit issued by IRCC or CIC which indicates the permit holder “may
                        accept employment” or “may work” in Canada
                      </li>
                      <li>
                        visitor record issued by IRCC or CIC showing that you are authorized to
                        work in Canada
                      </li>
                      <li>
                        diplomatic identity card and a work authorization issued by Department of
                        Foreign Affairs, Trade and Development
                      </li>
                    </ul>
                    <p><strong>Additional information for permits</strong></p>
                    <p>
                      If you don’t have a work permit, or have issues with your study permit
                      requirements, please <a href="#">contact IRCC</a>.
                    </p>
                    <p>
                      If your BIPP is expired, you may continue to work while waiting for your new
                      immigration document if you
                      <a rel="external" href="#">maintain your status during the processing</a>.
                    </p>
                    <p>
                      Once IRCC authorizes you to continue working in Canada, you must apply to
                      Service Canada with your new immigration document to update the expiry date
                      on your BIPP record. The expiry date on both your BIPP record and your
                      immigration document must match.
                    </p>
                  </div>
                  <div class="fill yourself-no-legal">
                    <p>You must provide both following documents:</p>
                    <ul>
                      <li>
                        birth certificate issued by a state authority from the country of birth.
                        If the document is not in English or French, see
                        <a href="#">Translation requirements</a>
                      </li>
                      <li>
                        statement of contribution or letter confirming eligibility for pension or
                        benefits from Canada Pension Plan, Old Age Security or Régime des rentes
                        du Québec
                      </li>
                    </ul>
                  </div>
                  <div class="fill yourself-indian-act">
                    <p>You must provide both following documents:</p>
                    <ul>
                      <li>
                        birth certificate issued by a state authority from the country of birth.
                        If the document is not in English or French, see
                        <a href="#">Translation requirements</a>; and
                      </li>
                      <li>A Certificate of Indian Status issued by Indigenous Services Canada</li>
                    </ul>
                  </div>
                </li>

                <!-- Documents specifically required depending on application method		-->
                <li class="fill secondary">
                  <p><strong>Secondary document</strong></p>
                  <p>
                      <span class="fill yourself"
                      ><span class="fill inperson"
                      >If you have reached the age of majority in your province or territory of
                          residence, y</span
                      ><span class="fill online mail">Y</span></span
                      ><span class="fill minor legal deceased">Y</span>ou must provide 1 of the
                    following documents. It must contain the legal name (family name and given
                    name) and the date of birth.
                  </p>
                  <ul>
                    <li>a passport (Canadian or foreign)</li>
                    <li>a Canadian provincial or territorial ID card or driver’s license</li>
                    <li>any other Canadian government-issued ID</li>
                  </ul>
                </li>
                <li class="fill mail">
                  <p>
                    <strong><a href="#">BIPP application form</a> completed and signed</strong>
                  </p>
                  <p>
                    If you are unable to print the application form, you can order one by phone
                    at:
                  </p>
                  <ul>
                    <li>1-866-274-6627 (toll free number) or,</li>
                    <li>
                      if outside Canada, at 1-506-548-7961 (long distance charges will apply)
                    </li>
                  </ul>
                </li>

                <!--	By Applicant type	-->
                <li class="fill deceased">
                  <p><strong>Proof of legal representation</strong></p>
                  <p>
                    You must provide an original or certified copy of a document proving that you
                    are legally authorized to represent the estate
                  </p>
                </li>
                <li class="fill legal">
                  <p><strong>Photo identification</strong></p>
                  <p>You must provide photo identification confirming your identity</p>
                  <p>
                    Note: Provincial and territorial employees must submit their employee photo
                    identification
                  </p>
                </li>
                <li class="fill legal">
                  <p><strong>Documentation confirming your legal representation</strong></p>
                  <p>issued by a Canadian provincial or territorial authority</p>
                </li>

                <!--		Depends on situation		-->

                <li class="fill legal">
                  <p>
                    <strong
                    >Letter of Authorization (Provincial and Territorial employees only)</strong
                    >
                  </p>
                  <p>
                    A letter of authorization issued by the agency and signed by the agency’s
                    director or administrator, authorizing you to apply for a BIPP on behalf of the
                    agency; this letter must be on the agency’s letterhead
                  </p>
                </li>
                <li class="fill minor">
                  <p>
                    <strong
                    >Documentation confirming legal guardianship (legal guardian only)</strong
                    >
                  </p>
                  <p>
                    Document issued by a Canadian provincial or territorial authority. In Quebec,
                    a notarized will is an acceptable document.
                  </p>
                </li>
                <li>
                  <p><strong>Supporting document</strong></p>
                  <p>
                    If the name on any document provided is different from the name on the BIPP
                    application, a legal document stating the most recent name used is required
                  </p>
                </li>
              </ol>
            </div>

            <!--		For person being represented -->
            <div class="fill minor deceased legal">
              <h4>
                Required documents for <span class="fill minor">the child</span
              ><span class="fill deceased">the deceased person</span
              ><span class="fill legal">the represented person</span>:
              </h4>
              <ol class="lst-spcd">
                <li>
                  <strong>Primary identity document</strong>
                  <div class="fill requestor-canadian">
                    <p>You must provide 1 of the following documents:</p>
                    <ul>
                      <li>
                        birth certificate issued by the vital statistics agency in the province or
                        territory of birth
                      </li>
                      <li>certificate of Canadian Citizenship issued by IRCC or CIC</li>
                      <li>
                        certificate of Registration of Birth Abroad issued by CIC before 1977
                      </li>
                    </ul>
                    <p>Note:</p>
                    <ul>
                      <li>
                        Most original certificates of birth and birth certificates are acceptable
                        to get a BIPP. However, some birth certificates may no longer be considered
                        valid or meet the requirements by the issuing province or meet the
                        requirements for various reasons. The BIPP Program must review the document
                        to determine its validity
                      </li>
                      <li>
                        The BIPP Program does not accept Quebec proof of birth documents issued
                        prior to 1994
                      </li>
                    </ul>
                  </div>
                  <div class="fill requestor-permanent">
                    <p>You must provide 1 of the following documents:</p>
                    <ul>
                      <li>Permanent Resident card issued by IRCC or CIC</li>
                      <li>
                        Confirmation of Permanent Residence (COPR) issued by IRCC
                        <p>
                          Note: If the COPR is used within one year of becoming a permanent
                          resident, it is acceptable. After this period, the Permanent Resident
                          Card is required
                        </p>
                      </li>
                      <li>Record of Landing issued by CIC before June 28, 2002</li>
                    </ul>
                    <details>
                      <summary>
                        <strong>When a Record of Landing or a COPR is not available</strong>
                      </summary>
                      <p>
                        The following may be submitted when the above documents cannot be
                        provided:
                      </p>
                      <ul>
                        <li>Verification of Landing issued by IRCC or CIC</li>
                        <li>Status Verification issued by IRCC or CIC</li>
                      </ul>
                      <p>
                        These documents will only be accepted for making changes to a BIPP record
                        or to get a confirmation of an existing BIPP.
                      </p>
                    </details>
                  </div>
                  <div class="fill requestor-temporary">
                    <p>You must provide 1 of the following documents:</p>
                    <ul>
                      <li>work permit issued by IRCC or CIC</li>
                      <li>
                        study permit issued by IRCC or CIC which indicates the permit holder “may
                        accept employment” or “may work” in Canada
                      </li>
                      <li>
                        visitor record issued by IRCC or CIC showing that you are authorized to
                        work in Canada
                      </li>
                      <li>
                        diplomatic identity card and a work authorization issued by Department of
                        Foreign Affairs, Trade and Development
                      </li>
                    </ul>
                    <p><strong>Additional information for permits</strong></p>
                    <p>
                      If you don’t have a work permit, or have issues with your study permit
                      requirements, please <a href="#">contact IRCC</a>.
                    </p>
                    <div class="fill yourself minor legal">
                      <p>
                        If your BIPP is expired, you may continue to work while waiting for your
                        new immigration document if you
                        <a rel="external" href="#">maintain your status during the processing</a>.
                      </p>
                      <p>
                        Once IRCC authorizes you to continue working in Canada, you must apply to
                        Service Canada with your new immigration document to update the expiry
                        date on your BIPP record. The expiry date on both your BIPP record and your
                        immigration document must match.
                      </p>
                    </div>
                  </div>
                  <div class="fill requestor-no-legal">
                    <p>You must provide both following documents:</p>
                    <ul>
                      <li>
                        birth certificate issued by a state authority from the country of birth.
                        If the document is not in English or French, see
                        <a href="#">Translation requirements</a>
                      </li>
                      <li>
                        statement of contribution or letter confirming eligibility for pension or
                        benefits from Canada Pension Plan, Old Age Security or Régime des rentes
                        du Québec
                      </li>
                    </ul>
                  </div>
                  <div class="fill requestor-indian-act">
                    <p>You must provide both following documents:</p>
                    <ul>
                      <li>
                        birth certificate issued by a state authority from the country of birth.
                        If the document is not in English or French, see
                        <a href="#">Translation requirements</a>; and
                      </li>
                      <li>A Certificate of Indian Status issued by Indigenous Services Canada</li>
                    </ul>
                  </div>
                </li>

                <!--	Documents for different types of applicants		-->
                <li class="fill deceased"><strong>Death certificate</strong></li>
                <li>
                  <p><strong>Supporting document</strong></p>
                  <p>
                    If the name on any document provided is different from the name on the BIPP
                    application, a legal document stating the most recent name used is required
                  </p>
                </li>
              </ol>
            </div>

            <!-- additional details -->

            <div class="fill online">
              <p>
                <a
                    class="btn btn-call-to-action"
                    href="#"
                    data-gc-analytics-customclick="ESDC-EDSC:Apply for a SIN:Apply online"
                >Apply online</a
                >
              </p>
            </div>
            <div class="fill mail">
              <h3>Mail your BIPP application</h3>
              <address>
                Service Canada<br />
                Social Insurance Registration Office<br />
                PO Box 7000<br />
                Bathurst NB E2A 4T1<br />
                Canada
              </address>
              <p>
                If you submit your application by mail, we will return your documents by mail once
                your application is complete. Service Canada is
                <strong>not responsible</strong> for documents lost in the mail.
              </p>
            </div>
            <div class="fill inperson">
              <p><a href="#">Find out if your local Service Canada Centre is open</a></p>
              <p>
                To request an appointment, please use the online
                <a href="#">service request form</a>.
              </p>
              <p>
                If everything is in order, you will get your BIPP
                <strong>during your visit</strong> and you will not need to part with your
                documents.
              </p>
            </div>
            <p>
              Please visit the BIPP <a href="#">required documents</a> page for detailed
              information about all required documents, examples, translation requirements and
              useful links.
            </p>
          </section>
          <div aria-relevant="all" aria-live="polite" class="arialive wb-inv"></div>
        </section>
        <nav class="mrgn-bttm-lg mrgn-tp-lg">
          <h3 class="wb-inv">Document navigation</h3>
          <ul class="pager">
            <li class="previous">
               <router-link :to="{name:'application'}">   <a   class="hidden-xs hidden-sm">Apply<span class="wb-inv">: Apply</span></a>  </router-link>
               <router-link :to="{name:'application'}"><a href=""  class="hidden-md hidden-lg">Apply<span class="wb-inv">: Apply</span></a></router-link>
            </li>

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
                id="gc-pg-hlpfl-frm"
                action="#"
                method="post"
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
              <input type="hidden" name="pageTitle" value="SIN Apply" />
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
                  >
                    Yes
                  </button>
                  <button

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
              id="wb-auto-21"
          >
            <section
                id="shr-pg-pnlShrPg"
                class="shr-pg mfp-hide modal-dialog modal-content overlay-def"
            >
              <header class="modal-header">
                <h2 class="modal-title"> <ShareAltOutlined /> Share this page</h2>
              </header>
              <div class="modal-body">
                <ul class="list-unstyled colcount-xs-2">

                </ul>
                <p class="col-sm-12 shr-dscl">

                </p>
                <div class="clearfix"></div>
              </div>
            </section>
            <a
                href="#"
                aria-controls="shr-pg-pnlShrPg"
                class="shr-opn wb-lbx btn btn-default btn-block mrgn-tp-md wb-lbx-inited wb-init"
                id="wb-auto-22"
            ><span class=""> <ShareAltOutlined />  </span>Share this page</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="reference parbase section">
      <div class="cq-dd-paragraph"></div>
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
              <h3>Basic Income Pilot</h3>
              <ul class="list-unstyled colcount-sm-2 colcount-md-3">
                <li><a href="">All contacts</a></li>
                <li><a href="">Departments and agencies</a></li>
                <li><a href="">About government</a></li>
              </ul>
              <h4><span class="wb-inv">Themes and topics</span></h4>
              <ul class="list-unstyled colcount-sm-2 colcount-md-3">
                <li><a href="">Jobs</a></li>
                <li><a href="">Immigration and citizenship</a></li>
                <li><a href="">Travel and tourism</a></li>
                <li><a href="">Business</a></li>
                <li><a href="">Benefits</a></li>
                <li><a href="">Health</a></li>
                <li><a href="">Taxes</a></li>
                <li><a href="">Environment and natural resources</a></li>
                <li><a href="">National security and defence</a></li>
                <li><a href="">Culture, history and sport</a></li>
                <li><a href="">Policing, justice and emergencies</a></li>
                <li><a href="">Transport and infrastructure</a></li>
                <li><a href="">Canada and the world</a></li>
                <li><a href="">Money and finance</a></li>
                <li><a href="">Science and innovation</a></li>
                <li><a href="">Indigenous peoples</a></li>
                <li><a href="">Veterans and military</a></li>
                <li><a href="">Youth</a></li>
              </ul>
            </nav>
          </div>
        </div>
        <div class="gc-sub-footer">
          <div class="container d-flex align-items-center">
            <nav>
              <h3 class="wb-inv">Basic Income Pilot Corporate</h3>
              <ul>
                <li><a href="">Social media</a></li>
                <li><a href="">Mobile applications</a></li>
                <li><a href="">About Canada.ca</a></li>

                <li><a href="">Terms and conditions</a></li>
                <li><a href="">Privacy</a></li>
              </ul>
            </nav>
            <div class="wtrmrk align-self-end">
              <img src="../assets/img/wmms-blk.svg" alt="Symbol of the Basic Income Pilot" />
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

<style lang="scss" scoped></style>
