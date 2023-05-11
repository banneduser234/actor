<template>

            <section class='mx-auto max-w-7xl px-6 lg:px-8 py-6 lg:py-8'>
                
                <header class="text-green-700 text-3xl font-extrabold text-center relative py-8 after:content-[''] after:absolute after:border-2 afer:border-4 after:border-green-700 after:w-60 after:bottom-0 after:left-0 after:right-0 after:mx-auto">
                    POLITIQUE DE CONFIDENTIALITE <span class='absolute inline-block border-8 border-green-700 bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/3'></span>
                </header>

            </section>

            <section class='mx-auto max-w-7xl px-6 lg:px-8 py-6 lg:py-8'>
                
                <article class="">

                    <header class="text-green-700 text-3xl font-extrabold">
                        PREAMBULE
                    </header>

                    <div class="my-2">
                        Cette Politique de Confidentialité décrit les pratiques de l’Opérateur 
                        de ce site web, tel que défini dans les Mentions Légales, concernant 
                        l’utilisation des Données Personnelles (ou « données ») des visiteurs 
                        (« visiteurs », ou « vous ») 
                        du site internet <Link href='https://acteur-agricole.bj' class="text-blue-700">https://acteur-agricole.bj</Link> Y sont notamment détaillés : 

                        <div class="pl-5 my-5">

                            <ul> 
                                <li v-for="link in tabs.prem_links" class="my-2 list-disc">{{ link }}</li>
                            </ul>

                        </div>

                    </div>

                </article>

                <article class="my-5">

                    <header class="text-green-700 text-3xl font-extrabold">
                        Pourquoi collectons-nous vos données ?
                    </header>

                    <div class="my-3">
                        Au travers de ce site web, nous sommes susceptibles de collecter 
                        vos données à des fins de connexion de vos besoins avec les opportunités, 
                        de partage d’information, de création de liens d’affaires et de facilitation 
                        pour l’accès aux financements et aux marchés potentiels. 
                    </div>

                    <div class="my-3">
                        L’objectif premier est de participer activement à la promotion des 
                        opérateurs économiques de la République du Bénin dans les domaines du 
                        commerce, de l’industrie et des prestations de service conformément aux 
                        statuts de la Chambre de Commerce et d’Industrie du Bénin 
                        (CCIB) adoptés par le décret 2019-408 du 25 septembre 2019. 
                    </div>

                    <div class="my-3">
                        Nous sommes également susceptibles d’utiliser vos données dans le 
                        cadre de notre newsletter, afin de vous tenir au courant 
                        des opportunités, des actualités économiques, des formations, etc. 
                    </div>

                </article>

                <article class="my-5">

                    <header class="text-green-700 text-3xl font-extrabold">
                        Quelles sont les données personnelles qui sont collectées me concernant ?
                    </header>

                    <div class="font-extrabold text-lg">Quelles données ?</div>

                    <div class="my-3">
                        Nous collectons et traitons notamment les informations générales sur 
                        l’entreprise, les informations sur le dirigeant (nom et prénoms, date 
                        de Naissance, lieu de naissance, sexe, adresse géographique, 
                        téléphone, adresse électronique, nationalité, données de connexions). 
                    </div>

                    <div class="my-3">
                        Nous ne collectons aucunes données sensibles, et vous 
                        vous engagez à ne nous communiquer 
                        aucune Donnée Sensible au travers de ce site internet. 
                    </div>

                    <div class="my-3">
                        Certaines données sont collectées automatiquement du fait de vos actions sur le site, 
                        d&apos;autres informations peuvent être transmises par des partenaires. 
                    </div>

                    <div class="font-extrabold text-lg">Quand ?</div>

                    <div class="my-3">

                        Nous collectons les informations que vous nous fournissez notamment quand : 

                        <ul class="pl-5">
                            <li v-for="link in [
                                    'Vous nous contactez à partir de nos formulaires de contact et d’inscription en ligne;',
                                    'Vous nous communiquez les informations au téléphone;',
                                    'Vous remplissez manuellement nos formulaires;'
                                ]" class="my-2 list-disc">{{ link }}</li>
                        </ul>

                        Nous collectons les informations à partir des bases de données existantes des entreprises dans le cadre de nos partenariats. 

                    </div>

                </article>

                <article class="my-5">

                    <header class="text-green-700 text-3xl font-extrabold">
                        Formulaires
                    </header>

                    <div class="my-3">
                        Notre site est susceptible de contenir des formulaires de contact 
                        et d’inscription, afin de faciliter votre mise en relation avec nous. 
                        Quand vous essayez de nous contacter via ces formulaires, nous vous demandons 
                        de fournir vos coordonnées, afin de pouvoir vous recontacter. 
                    </div>

                </article>

                <article class="my-5">

                    <header class="text-green-700 text-3xl font-extrabold">
                        Données de navigation
                    </header>

                    <div class="my-3">
                        Nous sommes également susceptibles de collecter vos données de navigation 
                        qui peuvent contenir votre adresse IP, appareil, navigateur, fournisseur 
                        d’accès internet et/ou opérateur, les pages et fichiers que vous avez consultés, 
                        vos recherches, votre système d’exploitation et données de configuration système, 
                        ainsi que la date et l’heure de votre visites. Certaines de ces données sont 
                        utilisées pour créer des statistiques générales qui nous permettent d’évaluer 
                        le nombre de visiteurs et 
                        d’améliorer l’utilisation globale de ces sites internet pas nos visiteurs. 
                    </div>

                </article>

                <article class="my-5">

                    <header class="text-green-700 text-3xl font-extrabold">
                        Sur quels fondements justifions-nous cette utilisation ?
                    </header>

                    <div class="my-3">
                        Les dernières réformes engagées à la Chambre de Commerce et 
                        d’Industrie du Bénin (CCIB) ont abouti à l’adoption des nouveaux 
                        statuts de la CCIB par le décret 2019-408 du 25 septembre 2019.

                        <div class="">

                            <div class="my-2">En application des statuts de la CCIB : </div>

                            <ul class="pl-5">
     
                                <li v-for="link in [
                                        `Toutes les entreprises relevant des secteurs du commerce, de 
                                        l’industrie et des prestations de services établies ou exerçant 
                                        leurs activités en République du Bénin sont d’office membres de 
                                        la Chambre de Commerce et 
                                        d’Industrie du Bénin (CCIB) et bénéficient de ses services.`,
                                        `La CCIB a pour mission d’assurer la représentation, la protection 
                                        et la promotion des intérêts communs des opérateurs économiques de 
                                        la République du Bénin dans les 
                                        domaines du commerce, de l’industrie et des prestations de service. `
                                    ]" class="my-2 list-disc">{{ link }}</li>

                            </ul>

                        </div>

                        <div class="">

                            <div class="my-2">Dans le cadre de sa mission et sans que cela soit limitatif, la Chambre: </div>

                            <ul class="pl-5">

                                <li v-for="link in [
                                        `Fournit aux opérateurs économiques et autres investisseurs, l’assistance 
                                        documentaire, toutes informations sur le droit applicable en République du 
                                        Bénin et les renseignements sur les zones économiques et les zones franches ;`,
                                        `met en œuvre toutes actions destinées à contribuer au développement 
                                        des activités des opérateurs économiques dans les secteurs du commerce, 
                                        de l’industrie et des prestations de services et encourage notamment, 
                                        la création des organismes, groupements 
                                        ou associations professionnels en vue de promouvoir lesdites activités ;`,
                                        `peut recevoir délégation des autorités compétentes pour gérer tous 
                                        organismes ou ouvrages publics, délivrer ou authentifier les certificats d’origine 
                                        ou autres documents accompagnant des marchandises à l’exportation `
                                    ]" class="my-2 list-disc">{{ link }}</li>

                            </ul>

                        </div>

                    </div>

                    <div class="my-3 font-bold">
                        Se fondant sur les statuts de la CCIB, la collecte et le traitement 
                        de vos données répondent entre autres au respect d&apos;une 
                        obligation légale et à l’exécution d’une mission d’intérêt public. 
                    </div>

                    <div class="my-3">
                        Nous collectons également vos données avec votre consentement, que vous nous 
                        donnez en naviguant sur ce site internet et en nous 
                        fournissant vos informations personnelles dans les formulaires à cet effet. 
                    </div>

                </article>

                <article class="my-5">

                    <header class="text-green-700 text-3xl font-extrabold">
                        Avec qui vos données sont-elles partagées ?
                    </header>

                    <div class="font-extrabold">Utilisateurs</div>

                    <div class="my-3">
                        En nous communiquant vos informations, vous acceptez le fait que nous soyons 
                        susceptibles de communiquer vos informations aux autres utilisateurs de cette 
                        place de marché afin de faciliter votre mise en relation avec ceux-ci. Nous ne 
                        contrôlons pas la manière dont les Utilisateurs de la plateforme utilisent 
                        vos données, qui est gouvernée par leur propre politique de confidentialité. 
                    </div>

                    <div class="font-extrabold">Tiers</div>

                    <div class="my-3">
                        Les “balises web” de cette politique traitent spécifiquement des données 
                        que nous ou des tiers recueillons par le biais des balises web, et de 
                        la manière dont vous pouvez les contrôler via votre navigateur web.
                        Nos sites peuvent également contenir des liens vers d’autres sites. 
                        Les pratiques de confidentialité de ces autres sites sont couvertes 
                        par leurs propres politiques de confidentialité. Merci de consulter 
                        ces politiques de confidentialité 
                        si vous souhaitez en savoir davantage. Vos données ne sont pas vendues 
                        à des tiers. 
                    </div>

                    <div class="font-extrabold">Divulgation obligatoire</div>

                    <div class="my-3">
                        Nous nous réservons le droit d’utiliser ou de divulguer des informations si la 
                        loi l’exige ou si nous croyons raisonnablement que l’utilisation ou la divulgation 
                        de ces informations est nécessaire pour protéger nos droits et/ou 
                        pour se conformer à une ordonnance du tribunal ou à une procédure judiciaire. 
                    </div>

                </article>

                <article class="my-5">

                    <header class="text-green-700 text-3xl font-extrabold">
                        Combien de temps conservons-nous vos données ?
                    </header>

                    <div class="my-3">
                        Nous ne conservons vos données que le temps nécessaire pour les utiliser 
                        conformément aux fins décrites dans cette Politique de Confidentialité 
                        ou pour nous conformer aux lois en vigueur. Quand vos données ne sont 
                        plus nécessaires ou pertinentes aux fins de l’utilisation que nous en 
                        faisons ou que leur suppression est requise par les lois en vigueur, nous 
                        prenons des mesures pour les faire supprimer ou les rendre anonymes. 
                    </div>

                </article>

                <article class="my-5">

                    <header class="text-green-700 text-3xl font-extrabold">
                        Comment protégeons-nous vos données ?
                    </header>

                    <div class="my-3">
                        Nous mettons en place toutes les mesures techniques et organisationnelles, telles 
                        que définies par les lois en vigueur, afin de protéger vos données contre l’accès 
                        non-autorisé à ces données, leur divulgation, leur modification ou leur perte. 
                        Nous revoyons et mettons à jour nos pratiques afin d’améliorer votre 
                        confidentialité et de nous assurer que nos politiques internes soient respectées. 
                    </div>

                </article>

                <article class="my-5">

                    <header class="text-green-700 text-3xl font-extrabold">
                        Comment exercer vos droits, et nous contacter ?
                    </header>

                    <div class="my-3">
                        Pour toute question concernant cette Politique de Confidentialité, 
                        ou afin d’exercer vos droits d’accès, rectification et suppression 
                        de vos données, tels que prévus et définis par le code du numérique, 
                        ainsi que votre droit d’opposition aux traitements définis dans la 
                        présente Politique de Confidentialité, et afin de retirer votre 
                        consentement, vous pouvez nous contacter à l’adresse suivante :  
                        01 BP 31 Cotonou Bénin ou par voie électronique à l’adresse email 
                        suivante : <a href='mailto:contact@acteur-agricole.bj' class="text-blue-700">contact@acteur-agricole.bj</a>
                    </div>

                    <div class="my-3">
                        Vous pourrez également, dans le cas où vous considérez que nous 
                        aurions violé vos droits tels qu’ils sont reconnus par la réglementation 
                        en vigueur, porter plainte auprès 
                        de l’Autorité de Protection des Données Personnelles ( www.apdp.bj). 
                    </div>

                </article>

                <article class="my-5">

                    <header class="text-green-700 text-3xl font-extrabold">
                        Les principes définis par cette Politique de Confidentialité 
                        sont-ils définitifs ?
                    </header>

                    <div class="my-3">
                        Nous sommes susceptibles de changer cette Politique de Confidentialité 
                        de temps à autre. Assurez- vous de la consulter régulièrement, seule la dernière 
                        version en date sera applicable aux traitements que nous effectuons. 
                    </div>

                </article>

            </section>

</template>

<script>

import { watch, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

    export default {

        data () {

            return {
                tabs : {
                    prem_links : [
                        'Les données collectées',
                        'Les finalités de la collecte',
                        'Les fondements de la collecte',
                        'L’utilisation qui est faite de ces données, et les éventuels transferts auprès de tiers',
                        'Les conditions de conservation des données'
                    ],
                    lv1_links : [

                    ]
                }
            }

        },
        setup () {
        const route = useRoute();

        const pageTitle = computed(() => {
        return route.meta.title || 'Default Page Title';
        });

        onMounted(() => {
        document.title = pageTitle.value;
        });

        watch(pageTitle, (newTitle) => {
        document.title = newTitle;
        });
    }

    }

</script>