import React from 'react'
import styled from "styled-components"

// components
import Section from './Section'


function Home() {
    return (
        <Container>
            <Section
                title="Just about everything you need to know before buying a Tesla"
                description="Lorem ipsum dolor sit amet, nam ea putant democritum consetetur, quo augue vidisse neglegentur an, alia nusquam expetenda sit te. An mel inermis perpetua. Id doming eripuit sea. Te omnis petentium pri, erant tantas est cu, eam omnis signiferumque in. Pri at alii omnis quaestio, ne nusquam copiosae sea.
                Suscipit invenire quaestio ius ei, ut eloquentiam consectetuer duo, nam imperdiet omittantur in. Hinc vivendo an mel, eu eros vide his. Solum vocent epicurei et vis, quis dicam mei an, in consul sapientem ullamcorper vel. Mei perfecto voluptaria disputationi at. Vis tota pertinax accommodare cu, semper saperet dolores quo no. Ut vix errem nusquam, eam eu iusto nobis.
                Sit latine alterum ut. Copiosae deseruisse vel ut, vis wisi lucilius et. Mei ubique facilisi mandamus ex, tale idque lucilius eos te, labore omnium officiis an nec. Eam eu periculis pertinacia.
                Labores corrumpit sea id, in duis erat ipsum pri, et qui detraxit mandamus iudicabit. Cu dolore vivendum democritum mel, vidit probo persecuti mei ea, et quod probatus gubergren pro. Ne cum fierent interesset, falli minim iracundia cu vim. Apeirian euripidis interpretaris ne pri. Qui ex docendi tractatos assentior, eu duis voluptua sit, legimus verterem ei pro.
                Eos fugit recusabo cu, sea lorem tritani et. Eam ipsum officiis pertinacia ad, ex sit elitr aliquip commune. Ad ius ipsum falli efficiendi, molestie scribentur sit ea, zril principes voluptatum cu pro. Eu denique officiis accusata eum, aperiri sensibus eam te, option epicurei oportere ea sed.Lorem ipsum dolor sit amet, nam ea putant democritum consetetur, quo augue vidisse neglegentur an, alia nusquam expetenda sit te. An mel inermis perpetua. Id doming eripuit sea. Te omnis petentium pri, erant tantas est cu, eam omnis signiferumque in. Pri at alii omnis quaestio, ne nusquam copiosae sea.
                Suscipit invenire quaestio ius ei, ut eloquentiam consectetuer duo, nam imperdiet omittantur in. Hinc vivendo an mel, eu eros vide his. Solum vocent epicurei et vis, quis dicam mei an, in consul sapientem ullamcorper vel. Mei perfecto voluptaria disputationi at. Vis tota pertinax accommodare cu, semper saperet dolores quo no. Ut vix errem nusquam, eam eu iusto nobis.
                Sit latine alterum ut. Copiosae deseruisse vel ut, vis wisi lucilius et. Mei ubique facilisi mandamus ex, tale idque lucilius eos te, labore omnium officiis an nec. Eam eu periculis pertinacia.
                Labores corrumpit sea id, in duis erat ipsum pri, et qui detraxit mandamus iudicabit. Cu dolore vivendum democritum mel, vidit probo persecuti mei ea, et quod probatus gubergren pro. Ne cum fierent interesset, falli minim iracundia cu vim. Apeirian euripidis interpretaris ne pri. Qui ex docendi tractatos assentior, eu duis voluptua sit, legimus verterem ei pro.
                Eos fugit recusabo cu, sea lorem tritani et. Eam ipsum officiis pertinacia ad, ex sit elitr aliquip commune. Ad ius ipsum falli efficiendi, molestie scribentur sit ea, zril principes voluptatum cu pro. Eu denique officiis accusata eum, aperiri sensibus eam te, option epicurei oportere ea sed."
                
                leftBtnText="Custom Order"
                rightBtnText="Existing inventory"
            />
            <Section
                title=""
                description=""
                
                leftBtnText="Custom Order"
                rightBtnText="Existing inventory"
            />
            <Section
                title=""
                description=""
                
                leftBtnText="Custom Order"
                rightBtnText="Existing inventory"
            />
            <Section
                title=""
                description=""
                backgroundImg="model-x.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing inventory"
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`