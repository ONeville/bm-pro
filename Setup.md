#Links


#Commands
    Add new project 
        ng generate app <project_name>
        ng generate app public-portal --directory=portal --routing --style=scss
        ng generate app portal --routing --style=scss --prefix --prefix=sht --tags=sht 
    Run project 
        ng serve --project=wportal -o
        ng serve --project=portal -o
    Add Component
        ng generate component home --project=portal
        ng generate component shared/contact --project=portal --module app
        ng generate component shared/audia --project=portal --module app-media
        ng generate component shared/video --project=portal --module app-media


        ng generate component views/contact --project=portal --module app-routing        
        ng generate component views/donation --project=portal --module app-routing


        ng generate component views/assemblee --project=portal --module app-routing
        ng generate component views/assemblee-pastor --project=portal --module app-routing
        ng generate component views/assemblee-staff --project=portal --module app-routing
        ng generate component views/assemblee-morijah --project=portal --module app-routing
        ng generate component views/assemblee-ecamo --project=portal --module app-routing

        ng generate component views/wmb --project=portal --module app-routing
        ng generate component views/wmb-testimony --project=portal --module app-routing
        ng generate component views/wmb-archives --project=portal --module app-routing

        ng generate component views/services --project=portal --module app-routing
        ng generate component views/services-direct --project=portal --module app-routing
        ng generate component views/services-sermons --project=portal --module app-routing

        ng generate component views/multimedia --project=portal --module app-routing
        ng generate component views/multimedia-message --project=portal --module app-routing
        ng generate component views/multimedia-bible --project=portal --module app-routing
        ng generate component views/multimedia-music --project=portal --module app-routing
        ng generate component views/multimedia-photo --project=portal --module app-routing
        ng generate component views/multimedia-video --project=portal --module app-routing
        ng generate component views/multimedia-divers --project=portal --module app-routing



        ng build --prod --base-href "https://oneville.github.io/shtab/"