(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{13:function(e,t,a){},49:function(e,t,a){e.exports=a(87)},54:function(e,t,a){},84:function(e,t){},87:function(e,t,a){"use strict";a.r(t);var l=a(0),r=a.n(l),n=a(46),c=a.n(n),i=a(1),o=(a(54),a(17)),s=a(4),m=a(5),d=a(6),u=a(8),b=a(7),h=(a(13),a(2));function v(){return r.a.createElement("div",null,r.a.createElement("h1",null,r.a.createElement("div",{class:"row page-links-row"},r.a.createElement("div",{class:"col page-links-bar"},r.a.createElement(i.b,{to:"/",class:"page-link",activeStyle:{color:"coral"},exact:!0,id:"nav"},"Home")),r.a.createElement("div",{class:"col page-links-bar"},r.a.createElement(i.b,{to:"/",class:"page-link",activeStyle:{color:"coral"},exact:!0,id:"nav"},"Back")))))}var E=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(e){var l;return Object(m.a)(this,a),(l=t.call(this,e)).openMemberHistory=function(e,t){e.preventDefault(),l.setState({selectedMember:t}),l.setState({buttonClicked:!0})},l.closeMemberHistory=function(e){e.preventDefault(),l.setState({buttonClicked:!1})},l.onChangeOrder=function(e){e.preventDefault(),"idHigh"==e.target.value?l.setState({membersSorted:l.props.members.sort((function(e,t){var a=e.id;return t.id-a}))}):"idLow"==e.target.value?l.setState({membersSorted:l.props.members.sort((function(e,t){return e.id-t.id}))}):"balanceHigh"==e.target.value?l.setState({membersSorted:l.props.members.sort((function(e,t){var a=e.balance;return t.balance-a}))}):"balanceLow"==e.target.value&&l.setState({membersSorted:l.props.members.sort((function(e,t){return e.balance-t.balance}))})},l.state={blockFire:!1,blockFlood:!1,blockPower:!1,blockMedical:!1,blockLow:!1,blockMedium:!1,blockHigh:!1,blockCritical:!1,selectedMember:l.props.selectedMember,buttonClicked:!1,membersSorted:l.props.members},l.openMemberHistory=l.openMemberHistory.bind(Object(s.a)(l)),l.closeMemberHistory=l.closeMemberHistory.bind(Object(s.a)(l)),l}return Object(d.a)(a,[{key:"fireChangeState",value:function(){this.setState({blockFire:!this.state.blockFire})}},{key:"floodChangeState",value:function(){this.setState({blockFlood:!this.state.blockFlood})}},{key:"powerChangeState",value:function(){this.setState({blockPower:!this.state.blockPower})}},{key:"medicalChangeState",value:function(){this.setState({blockMedical:!this.state.blockMedical})}},{key:"lowChangeState",value:function(){this.setState({blockLow:!this.state.blockLow})}},{key:"mediumChangeState",value:function(){this.setState({blockMedium:!this.state.blockMedium})}},{key:"highChangeState",value:function(){this.setState({blockHigh:!this.state.blockHigh})}},{key:"criticalChangeState",value:function(){this.setState({blockCritical:!this.state.blockCritical})}},{key:"render",value:function(){for(var e=this,t=0,a=0,l=0;l<this.props.members.length;l++){for(var n=0;n<this.props.members[l].credit.length;n++)t+=this.props.members[l].credit[n].amount;for(n=0;n<this.props.members[l].debit.length;n++)a+=this.props.members[l].debit[n].amount;this.props.members[l].balance=a-t,t=0,a=0}var c=this.props.members;return this.state.blockFire&&(c=c.filter((function(e){return!("Fire"===e.problem)}))),this.state.blockFlood&&(c=c.filter((function(e){return!("Flood"===e.problem)}))),this.state.blockPower&&(c=c.filter((function(e){return!("Power"===e.problem)}))),this.state.blockMedical&&(c=c.filter((function(e){return!("Medical"===e.problem)}))),this.state.blockLow&&(c=c.filter((function(e){return!("Low"===e.priority)}))),this.state.blockMedium&&(c=c.filter((function(e){return!("Medium"===e.priority)}))),this.state.blockHigh&&(c=c.filter((function(e){return!("High"===e.priority)}))),this.state.blockCritical&&(c=c.filter((function(e){return!("Critical"===e.priority)}))),!0===this.state.buttonClicked?r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h1",null,r.a.createElement("div",{class:"row page-links-row"},r.a.createElement("div",{class:"col page-links-bar"},r.a.createElement(i.b,{to:"/",class:"page-link",activeStyle:{color:"coral"},exact:!0,id:"nav"},"Home")),r.a.createElement("div",{class:"col page-links-bar"},r.a.createElement(i.b,{to:"/MemberBalances",class:"page-link",activeStyle:{color:"coral"},exact:!0,id:"nav",onClick:function(t){return e.closeMemberHistory(t)}},"Back"))))),r.a.createElement("div",{class:"row",id:"live-row-selected"},r.a.createElement("div",{class:"col",id:"live-col-feed"},r.a.createElement("div",{id:"whole-post-selected"},r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement("div",{class:"row",id:"live-row-feed"},r.a.createElement("div",{class:"col",id:"profile-image"},r.a.createElement("img",{id:"profile-photo",src:this.state.membersSorted[this.state.selectedMember].image,alt:"{name}"})," ",r.a.createElement("br",null))),r.a.createElement("div",{class:"row",id:"live-row-feed"},r.a.createElement("div",{class:"col",id:"profile-info"},r.a.createElement("b",null,this.state.membersSorted[this.state.selectedMember].name," ",r.a.createElement("br",null)),"Balance: ",this.state.membersSorted[this.state.selectedMember].balance," ",r.a.createElement("br",null),"Problem: ",this.state.membersSorted[this.state.selectedMember].problem," ",r.a.createElement("br",null),"Priority: ",this.state.membersSorted[this.state.selectedMember].priority," ",r.a.createElement("br",null))),r.a.createElement("div",{class:"row",id:"live-row-feed"},r.a.createElement("div",{class:"col",id:"profile-msg"},this.state.membersSorted[this.state.selectedMember].content," ",r.a.createElement("br",null)," ",r.a.createElement("br",null)," ",r.a.createElement("br",null)," ",r.a.createElement("br",null)))),r.a.createElement("div",{id:"whole-post-selected"},r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement("div",{class:"row",id:"live-row-feed"},r.a.createElement("div",{class:"col",id:"profile-info"},r.a.createElement("b",null,"Debit List:",r.a.createElement("br",null),r.a.createElement("br",null)),this.state.membersSorted[this.state.selectedMember].debit.map((function(e){var t=e.amount,a=e.message;return r.a.createElement("div",null,r.a.createElement("div",{id:"transaction-listing"},r.a.createElement("b",null,"Transaction Amount:")," "+t,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("b",null,"Transaction Description:"),r.a.createElement("br",null)," "+a,r.a.createElement("br",null)),r.a.createElement("br",null))}))," ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null)))),r.a.createElement("div",{id:"whole-post-selected"},r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement("div",{class:"row",id:"live-row-feed"},r.a.createElement("div",{class:"col",id:"profile-info"},r.a.createElement("b",null,"Credit List:",r.a.createElement("br",null),r.a.createElement("br",null)),this.state.membersSorted[this.state.selectedMember].credit.map((function(e){var t=e.amount,a=e.message;return r.a.createElement("div",null,r.a.createElement("div",{id:"transaction-listing"},r.a.createElement("b",null,"Transaction Amount:")," "+t,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("b",null,"Transaction Description:"),r.a.createElement("br",null)," "+a,r.a.createElement("br",null)),r.a.createElement("br",null))}))," ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null))))))):r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement("div",{class:"row",id:"live-row"},r.a.createElement("div",{class:"col",id:"live-col-check"},r.a.createElement("div",{onChange:this.onChangeOrder},r.a.createElement("div",{class:"row",id:"live-row-check"},r.a.createElement("h3",null,"Sort by ID")),r.a.createElement("div",{class:"row",id:"live-row-check"},r.a.createElement("input",{type:"radio",id:"floodDisplayed",value:"idHigh",name:"orderGroup"}),r.a.createElement("label",{for:"floodDisplayed"},"High - Low")),r.a.createElement("div",{class:"row",id:"live-row-check"},r.a.createElement("input",{type:"radio",id:"powerDisplayed",value:"idLow",name:"orderGroup"}),r.a.createElement("label",{for:"powerDisplayed"},"Low - High")),r.a.createElement("div",{class:"row",id:"live-row-check"},r.a.createElement("h3",null,"Sort by Balance")),r.a.createElement("div",{class:"row",id:"live-row-check"},r.a.createElement("input",{type:"radio",id:"mediumDisplayed",value:"balanceHigh",name:"orderGroup"}),r.a.createElement("label",{for:"mediumDisplayed"},"High - Low")),r.a.createElement("div",{class:"row",id:"live-row-check"},r.a.createElement("input",{type:"radio",id:"highDisplayed",value:"balanceLow",name:"orderGroup"}),r.a.createElement("label",{for:"highDisplayed"},"Low - High")))),r.a.createElement("div",{class:"col",id:"live-col-feed"},this.state.membersSorted.map((function(t,a){var l=t.name,n=t.image,c=t.content,i=t.problem,o=t.priority,s=(t.debit,t.credit,t.balance),m=t.id;return r.a.createElement("div",{id:"whole-post",key:m},r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement("div",{class:"row",id:"live-row-feed"},r.a.createElement("div",{class:"col",id:"profile-image"},r.a.createElement("img",{id:"profile-photo",src:n,alt:"{name}"})," ",r.a.createElement("br",null))),r.a.createElement("div",{class:"row",id:"live-row-feed"},r.a.createElement("div",{class:"col",id:"profile-info"},r.a.createElement("b",null,l," ",r.a.createElement("br",null)),"Balance: ",s," ",r.a.createElement("br",null),"Problem: ",i," ",r.a.createElement("br",null),"Priority: ",o," ",r.a.createElement("br",null))),r.a.createElement("div",{class:"row",id:"live-row-feed"},r.a.createElement("div",{class:"col",id:"profile-msg"},r.a.createElement("button",{onClick:function(t){return e.openMemberHistory(t,a)}},"Open History"))),r.a.createElement("div",{class:"row",id:"live-row-feed"},r.a.createElement("div",{class:"col",id:"profile-msg"},c," ",r.a.createElement("br",null)," ",r.a.createElement("br",null)," ",r.a.createElement("br",null)," ",r.a.createElement("br",null))))})))))}}]),a}(r.a.Component);function p(){return r.a.createElement("div",null,r.a.createElement("h1",null,r.a.createElement("div",{class:"row page-links-row"},r.a.createElement("div",{class:"col page-links-bar"},r.a.createElement(i.b,{to:"/",class:"page-link",activeStyle:{color:"coral"},exact:!0,id:"nav"},"Home")),r.a.createElement("div",{class:"col page-links-bar"},r.a.createElement(i.b,{to:"/",class:"page-link",activeStyle:{color:"coral"},exact:!0,id:"nav"},"Back")))))}var f=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(e){var l;return Object(m.a)(this,a),(l=t.call(this,e)).submitSelected=function(e){e.preventDefault();for(var t=0;t<l.state.members.length;t++)l.state.members[t].id==l.state.selectedMember&&l.state.members[t].credit.push({amount:l.state.selectedAmount,message:l.state.selectedMessage});l.setState({formSubmitted:!0})},l.state={members:l.props.members,selectedMember:"none",selectedAmount:0,selectedMessage:"none",formSubmitted:!1},l.selectMember=l.selectMember.bind(Object(s.a)(l)),l.selectAmount=l.selectAmount.bind(Object(s.a)(l)),l.selectMessage=l.selectMessage.bind(Object(s.a)(l)),l.submitSelected=l.submitSelected.bind(Object(s.a)(l)),l}return Object(d.a)(a,[{key:"selectMember",value:function(e){this.setState({selectedMember:e.target.value})}},{key:"selectAmount",value:function(e){this.setState({selectedAmount:e.target.value})}},{key:"selectMessage",value:function(e){this.setState({selectedMessage:e.target.value})}},{key:"render",value:function(){return!0===this.state.formSubmitted?r.a.createElement(h.a,{to:"/"}):r.a.createElement("div",null,r.a.createElement(p,null),r.a.createElement("h1",null,"Credit Member"),r.a.createElement("form",{onSubmit:this.submitSelected},r.a.createElement("div",{class:"row",id:"credit-row"},r.a.createElement("div",{class:"col",id:"credit-col"},r.a.createElement("div",{class:"row",id:"credit-row-label"},"Select Member: ",this.state.selectedMember),r.a.createElement("div",{class:"row",id:"credit-row-entry"},r.a.createElement("select",{value:this.state.value,onChange:this.selectMember},r.a.createElement("option",{value:-1},"Select"),this.props.members.map((function(e){var t=e.name,a=e.id;return r.a.createElement("option",{value:a,key:a},t)})),";")))),r.a.createElement("div",{class:"row",id:"credit-row"},r.a.createElement("div",{class:"col",id:"credit-col"},r.a.createElement("div",{class:"row",id:"credit-row-label"},"Enter Value: ",this.state.selectedAmount),r.a.createElement("div",{class:"row",id:"credit-row-entry"},r.a.createElement("input",{type:"text",value:this.state.value,onChange:this.selectAmount})))),r.a.createElement("div",{class:"row",id:"credit-row"},r.a.createElement("div",{class:"col",id:"credit-col"},r.a.createElement("div",{class:"row",id:"credit-row-label"},"Message: ",this.state.selectedMessage),r.a.createElement("div",{class:"row",id:"credit-row-entry"},r.a.createElement("textarea",{value:this.state.value,onChange:this.selectMessage})))),r.a.createElement("div",{class:"row",id:"credit-row"},r.a.createElement("div",{class:"col",id:"credit-col"},r.a.createElement("div",{class:"row",id:"credit-row-submit"},r.a.createElement("input",{type:"submit",value:"Submit"}))))))}}]),a}(r.a.Component);function k(){return r.a.createElement("div",null,r.a.createElement("h1",null,r.a.createElement("div",{class:"row page-links-row"},r.a.createElement("div",{class:"col page-links-bar"},r.a.createElement(i.b,{to:"/",class:"page-link",activeStyle:{color:"coral"},exact:!0,id:"nav"},"Home")),r.a.createElement("div",{class:"col page-links-bar"},r.a.createElement(i.b,{to:"/",class:"page-link",activeStyle:{color:"coral"},exact:!0,id:"nav"},"Back")))))}var w=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(e){var l;return Object(m.a)(this,a),(l=t.call(this,e)).onChangeOrder=function(e){e.preventDefault(),"amountHigh"==e.target.value?l.setState({high_low:!0}):l.setState({high_low:!1})},l.state={members:l.props.members,totalCredit:0,totalDebit:0,high_low:!1,blockFire:!1,blockFlood:!1,blockPower:!1,blockMedical:!1,blockLow:!1,blockMedium:!1,blockHigh:!1,blockCritical:!1},l}return Object(d.a)(a,[{key:"fireChangeState",value:function(){this.setState({blockFire:!this.state.blockFire})}},{key:"floodChangeState",value:function(){this.setState({blockFlood:!this.state.blockFlood})}},{key:"powerChangeState",value:function(){this.setState({blockPower:!this.state.blockPower})}},{key:"medicalChangeState",value:function(){this.setState({blockMedical:!this.state.blockMedical})}},{key:"lowChangeState",value:function(){this.setState({blockLow:!this.state.blockLow})}},{key:"mediumChangeState",value:function(){this.setState({blockMedium:!this.state.blockMedium})}},{key:"highChangeState",value:function(){this.setState({blockHigh:!this.state.blockHigh})}},{key:"criticalChangeState",value:function(){this.setState({blockCritical:!this.state.blockCritical})}},{key:"render",value:function(){for(var e=0,t=0,a=[],l=[],n=0;n<this.props.members.length;n++){for(var c=0;c<this.props.members[n].credit.length;c++)e+=this.props.members[n].credit[c].amount,a.push({name:this.props.members[n].name,amount:this.props.members[n].credit[c].amount,message:this.props.members[n].credit[c].message});for(c=0;c<this.props.members[n].debit.length;c++)t+=this.props.members[n].debit[c].amount,l.push({name:this.props.members[n].name,amount:this.props.members[n].debit[c].amount,message:this.props.members[n].debit[c].message})}this.state.high_low?(a=a.sort((function(e,t){var a=e.amount;return t.amount-a})),l=l.sort((function(e,t){var a=e.amount;return t.amount-a}))):(a=a.sort((function(e,t){return e.amount-t.amount})),l=l.sort((function(e,t){return e.amount-t.amount})));var i=this.props.members;return this.state.blockFire&&(i=i.filter((function(e){return!("Fire"===e.problem)}))),this.state.blockFlood&&(i=i.filter((function(e){return!("Flood"===e.problem)}))),this.state.blockPower&&(i=i.filter((function(e){return!("Power"===e.problem)}))),this.state.blockMedical&&(i=i.filter((function(e){return!("Medical"===e.problem)}))),this.state.blockLow&&(i=i.filter((function(e){return!("Low"===e.priority)}))),this.state.blockMedium&&(i=i.filter((function(e){return!("Medium"===e.priority)}))),this.state.blockHigh&&(i=i.filter((function(e){return!("High"===e.priority)}))),this.state.blockCritical&&(i=i.filter((function(e){return!("Critical"===e.priority)}))),r.a.createElement("div",null,r.a.createElement(k,null),r.a.createElement("div",{class:"row",id:"live-row"},r.a.createElement("h1",null,"Total Credit: ",t),r.a.createElement("h1",null,"Overall Balance: ",t-e),r.a.createElement("h1",null,"Total Debit: ",e)),r.a.createElement("div",{class:"row",id:"live-row"},r.a.createElement("div",{class:"col",id:"live-col-check"},r.a.createElement("div",{onChange:this.onChangeOrder},r.a.createElement("div",{class:"row",id:"live-row-check"},r.a.createElement("h3",null,"Sort by ID")),r.a.createElement("div",{class:"row",id:"live-row-check"},r.a.createElement("input",{type:"radio",id:"floodDisplayed",value:"amountHigh",name:"orderGroup"}),r.a.createElement("label",{for:"floodDisplayed"},"High - Low")),r.a.createElement("div",{class:"row",id:"live-row-check"},r.a.createElement("input",{type:"radio",id:"powerDisplayed",value:"amountLow",name:"orderGroup"}),r.a.createElement("label",{for:"powerDisplayed"},"Low - High")))),r.a.createElement("div",{class:"col",id:"live-col-feed"},r.a.createElement("h2",null,"Debit Transactions:"),r.a.createElement("div",{id:"whole-post-balance"},r.a.createElement("div",{class:"row",id:"live-row-feed"},r.a.createElement("div",{class:"col",id:"profile-info"},l.map((function(e){var t=e.name,a=e.amount,l=e.message;return r.a.createElement("div",null,r.a.createElement("div",{id:"transaction-listing"},r.a.createElement("b",null,"Member Name:")," "+t,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("b",null,"Transaction Amount:")," "+a,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("b",null,"Transaction Description:"),r.a.createElement("br",null)," "+l,r.a.createElement("br",null)),r.a.createElement("br",null))}))))),r.a.createElement("h2",null,"Credit Transactions:"),r.a.createElement("div",{id:"whole-post-balance"},r.a.createElement("div",{class:"row",id:"live-row-feed"},r.a.createElement("div",{class:"col",id:"profile-info"},a.map((function(e){var t=e.name,a=e.amount,l=e.message;return r.a.createElement("div",null,r.a.createElement("div",{id:"transaction-listing"},r.a.createElement("b",null,"Member Name:")," "+t,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("b",null,"Transaction Amount:")," "+a,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("b",null,"Transaction Description:"),r.a.createElement("br",null)," "+l,r.a.createElement("br",null)),r.a.createElement("br",null))}))))))))}}]),a}(r.a.Component);function g(){return r.a.createElement("div",null,r.a.createElement("h1",null,r.a.createElement("div",{class:"row page-links-row"},r.a.createElement("div",{class:"col page-links-bar"},r.a.createElement(i.b,{to:"/",class:"page-link",activeStyle:{color:"coral"},exact:!0,id:"nav"},"Home")),r.a.createElement("div",{class:"col page-links-bar"},r.a.createElement(i.b,{to:"/",class:"page-link",activeStyle:{color:"coral"},exact:!0,id:"nav"},"Back")))))}var y=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(e){var l;return Object(m.a)(this,a),(l=t.call(this,e)).state={blockFire:!1,blockFlood:!1,blockPower:!1,blockMedical:!1,blockLow:!1,blockMedium:!1,blockHigh:!1,blockCritical:!1},l}return Object(d.a)(a,[{key:"fireChangeState",value:function(){this.setState({blockFire:!this.state.blockFire})}},{key:"floodChangeState",value:function(){this.setState({blockFlood:!this.state.blockFlood})}},{key:"powerChangeState",value:function(){this.setState({blockPower:!this.state.blockPower})}},{key:"medicalChangeState",value:function(){this.setState({blockMedical:!this.state.blockMedical})}},{key:"lowChangeState",value:function(){this.setState({blockLow:!this.state.blockLow})}},{key:"mediumChangeState",value:function(){this.setState({blockMedium:!this.state.blockMedium})}},{key:"highChangeState",value:function(){this.setState({blockHigh:!this.state.blockHigh})}},{key:"criticalChangeState",value:function(){this.setState({blockCritical:!this.state.blockCritical})}},{key:"render",value:function(){var e=this.props.members;return this.state.blockFire&&(e=e.filter((function(e){return!("Fire"===e.problem)}))),this.state.blockFlood&&(e=e.filter((function(e){return!("Flood"===e.problem)}))),this.state.blockPower&&(e=e.filter((function(e){return!("Power"===e.problem)}))),this.state.blockMedical&&(e=e.filter((function(e){return!("Medical"===e.problem)}))),this.state.blockLow&&(e=e.filter((function(e){return!("Low"===e.priority)}))),this.state.blockMedium&&(e=e.filter((function(e){return!("Medium"===e.priority)}))),this.state.blockHigh&&(e=e.filter((function(e){return!("High"===e.priority)}))),this.state.blockCritical&&(e=e.filter((function(e){return!("Critical"===e.priority)}))),r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement("div",{class:"row",id:"live-row"},r.a.createElement("div",{class:"col",id:"live-col-check"},r.a.createElement("div",{class:"row",id:"live-row-check"},r.a.createElement("h3",null,"Problem Type")),r.a.createElement("div",{class:"row",id:"live-row-check"},r.a.createElement("input",{type:"checkbox",id:"fireDisplayed",checked:!this.state.blockFire,onChange:this.fireChangeState.bind(this)}),r.a.createElement("label",{for:"fireDisplayed"},"Fire")),r.a.createElement("div",{class:"row",id:"live-row-check"},r.a.createElement("input",{type:"checkbox",id:"floodDisplayed",checked:!this.state.blockFlood,onChange:this.floodChangeState.bind(this)}),r.a.createElement("label",{for:"floodDisplayed"},"Flood")),r.a.createElement("div",{class:"row",id:"live-row-check"},r.a.createElement("input",{type:"checkbox",id:"powerDisplayed",checked:!this.state.blockPower,onChange:this.powerChangeState.bind(this)}),r.a.createElement("label",{for:"powerDisplayed"},"Power")),r.a.createElement("div",{class:"row",id:"live-row-check"},r.a.createElement("input",{type:"checkbox",id:"medicalDisplayed",checked:!this.state.blockMedical,onChange:this.medicalChangeState.bind(this)}),r.a.createElement("label",{for:"medicalDisplayed"},"Medical")),r.a.createElement("div",{class:"row",id:"live-row-check"},r.a.createElement("h3",null,"Priority Level")),r.a.createElement("div",{class:"row",id:"live-row-check"},r.a.createElement("input",{type:"checkbox",id:"lowDisplayed",checked:!this.state.blockLow,onChange:this.lowChangeState.bind(this)}),r.a.createElement("label",{for:"lowDisplayed"},"Low")),r.a.createElement("div",{class:"row",id:"live-row-check"},r.a.createElement("input",{type:"checkbox",id:"mediumDisplayed",checked:!this.state.blockMedium,onChange:this.mediumChangeState.bind(this)}),r.a.createElement("label",{for:"mediumDisplayed"},"Medium")),r.a.createElement("div",{class:"row",id:"live-row-check"},r.a.createElement("input",{type:"checkbox",id:"highDisplayed",checked:!this.state.blockHigh,onChange:this.highChangeState.bind(this)}),r.a.createElement("label",{for:"highDisplayed"},"High")),r.a.createElement("div",{class:"row",id:"live-row-check"},r.a.createElement("input",{type:"checkbox",id:"criticalDisplayed",checked:!this.state.blockCritical,onChange:this.criticalChangeState.bind(this)}),r.a.createElement("label",{for:"criticalDisplayed"},"Critical"))),r.a.createElement("div",{class:"col",id:"live-col-feed"},this.props.members.map((function(e){var t=e.name,a=e.image,l=e.content,n=e.problem,c=e.priority,i=e.debit,o=e.credit,s=e.id;return r.a.createElement("div",{id:"whole-post",key:s},r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement("div",{class:"row",id:"live-row-feed"},r.a.createElement("div",{class:"col",id:"profile-image"},r.a.createElement("img",{id:"profile-photo",src:a,alt:"{name}"})," ",r.a.createElement("br",null))),r.a.createElement("div",{class:"row",id:"live-row-feed",key:s},r.a.createElement("div",{class:"col",id:"profile-info"},r.a.createElement("b",null,t," ",r.a.createElement("br",null)),"Problem: ",n," ",r.a.createElement("br",null),"Priority: ",c," ",r.a.createElement("br",null),"Debit: ",i.map((function(e){return e.amount+", "+e.message+"\n"}))," ",r.a.createElement("br",null),"Credit: ",o.map((function(e){return e.amount+", "+e.message+"\n"}))," ",r.a.createElement("br",null))),r.a.createElement("div",{class:"row",id:"live-row-feed"},r.a.createElement("div",{class:"col",id:"profile-msg"},l," ",r.a.createElement("br",null)," ",r.a.createElement("br",null)," ",r.a.createElement("br",null)," ",r.a.createElement("br",null))))})))))}}]),a}(r.a.Component);function S(){return r.a.createElement("div",null,r.a.createElement("h1",null,r.a.createElement("div",{class:"row page-links-row"},r.a.createElement("div",{class:"col page-links-bar"},r.a.createElement(i.b,{to:"/",class:"page-link",activeStyle:{color:"coral"},exact:!0,id:"nav"},"Home")),r.a.createElement("div",{class:"col page-links-bar"},r.a.createElement(i.b,{to:"/",class:"page-link",activeStyle:{color:"coral"},exact:!0,id:"nav"},"Back")))))}var M=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(e){var l;return Object(m.a)(this,a),(l=t.call(this,e)).submitSelected=function(e){e.preventDefault(),l.state.invoices.push({names:l.state.selectedMembers,expenses:l.state.invoiceExpenses}),l.setState({formSubmitted:!0})},l.state={members:l.props.members,selectedMembers:[],invoiceExpenses:[],selectedAmount:0,selectedMessage:"none",formSubmitted:!1},l.selectMembers=l.selectMembers.bind(Object(s.a)(l)),l.selectAmount=l.selectAmount.bind(Object(s.a)(l)),l.selectMessage=l.selectMessage.bind(Object(s.a)(l)),l.submitSelected=l.submitSelected.bind(Object(s.a)(l)),l.submitExpense=l.submitExpense.bind(Object(s.a)(l)),l}return Object(d.a)(a,[{key:"selectMembers",value:function(e){this.state.selectedMembers.includes(e.target.value)||this.setState({selectedMembers:[].concat(Object(o.a)(this.state.selectedMembers),[e.target.value])})}},{key:"selectAmount",value:function(e){this.setState({selectedAmount:e.target.value})}},{key:"selectMessage",value:function(e){this.setState({selectedMessage:e.target.value})}},{key:"submitExpense",value:function(e){e.preventDefault(),this.setState({invoiceExpenses:[].concat(Object(o.a)(this.state.invoiceExpenses),[{amount:this.state.selectedAmount,message:this.state.selectedMessage}])})}},{key:"render",value:function(){return!0===this.state.formSubmitted?r.a.createElement(h.a,{to:"/"}):r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement("h1",null,"Draft Invoice"),r.a.createElement("form",{onSubmit:this.submitSelected},r.a.createElement("div",{class:"row",id:"credit-row"},r.a.createElement("div",{class:"col",id:"credit-col"},r.a.createElement("div",{class:"row",id:"credit-row-label"},r.a.createElement("div",{class:"col"}," Selected Members:")),r.a.createElement("div",{class:"row",id:"credit-row-label"},this.state.selectedMembers.map((function(e){return r.a.createElement("div",{class:"col",id:"member-col"},e)}))),r.a.createElement("div",{class:"row",id:"credit-row-entry"},r.a.createElement("select",{value:this.state.value,onChange:this.selectMembers},r.a.createElement("option",{value:-1},"Select"),this.props.members.map((function(e){var t=e.name,a=e.id;return r.a.createElement("option",{value:t,key:a},t)})),";")))),r.a.createElement("div",{class:"row",id:"credit-row-large"},r.a.createElement("div",{class:"col",id:"credit-col"},r.a.createElement("div",{class:"row",id:"credit-row-label"},"Enter Value: ",this.state.selectedAmount),r.a.createElement("div",{class:"row",id:"credit-row-entry"},r.a.createElement("input",{type:"text",value:this.state.value,onChange:this.selectAmount})),r.a.createElement("div",{class:"row",id:"credit-row-label"},"Message: ",this.state.selectedMessage),r.a.createElement("div",{class:"row",id:"credit-row-entry"},r.a.createElement("textarea",{value:this.state.value,onChange:this.selectMessage})),r.a.createElement("div",{class:"row",id:"credit-row-entry"},r.a.createElement("button",null,"Add Expense")))),r.a.createElement("div",{class:"row",id:"credit-row"},r.a.createElement("div",{class:"col",id:"credit-col"},r.a.createElement("div",{class:"row",id:"credit-row-submit"},r.a.createElement("input",{type:"submit",value:"Submit"}))))))}}]),a}(r.a.Component),C=a(48),O=a.n(C)()("http://localhost:3001"),D=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(H,null),r.a.createElement("div",{class:"row",id:"home-row"},r.a.createElement("div",{class:"col page-links-bar"},r.a.createElement(i.b,{to:"/CreditMember",class:"page-link",activeStyle:{color:"coral"},id:"nav"},"Credit Member")),r.a.createElement("div",{class:"col page-links-bar"},r.a.createElement(i.b,{to:"/DraftInvoice",class:"page-link",activeStyle:{color:"coral"},id:"nav"},"Draft Invoice"))),r.a.createElement("div",{class:"row",id:"home-row"},r.a.createElement("div",{class:"col",id:"home-col"},r.a.createElement(i.b,{to:"/BalanceSummary",class:"page-link",activeStyle:{color:"coral"},id:"nav"},"Balance Summary"))),r.a.createElement("div",{class:"row",id:"home-row"},r.a.createElement("div",{class:"col",id:"home-col"},r.a.createElement(i.b,{to:"/MemberBalances",class:"page-link",activeStyle:{color:"coral"},id:"nav"},"Member Balances"))),r.a.createElement("div",{class:"row",id:"home-row"},r.a.createElement("div",{class:"col",id:"home-col"},r.a.createElement(i.b,{to:"/InvoiceOverview",class:"page-link",activeStyle:{color:"coral"},id:"nav"},"Invoice Overview"))))}}]),a}(r.a.Component);function H(){return r.a.createElement("div",null,r.a.createElement("h1",null,r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col page-links-bar"},r.a.createElement(i.b,{to:"/",class:"page-link",activeStyle:{color:"coral"},exact:!0,id:"nav"},"Home")))))}var j=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(e){var l;return Object(m.a)(this,a),(l=t.call(this,e)).state={members:[],incrementId:0,selectedMember:0,invoices:[]},O.on("connect",function(){console.log("Connect...."),O.on("post",function(e){this.setState({members:[].concat(Object(o.a)(this.state.members),[{name:e.name,image:e.image,content:e.content,problem:e.problem,priority:e.priority,debit:e.debit,credit:e.credit,id:this.state.incrementId}]),incrementId:this.state.incrementId+1})}.bind(this))}.bind(Object(s.a)(l))),l}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("main",null,r.a.createElement(h.d,null,r.a.createElement(h.b,{path:"/",component:D,exact:!0}),r.a.createElement(h.b,{path:"/MemberBalances",render:function(t){t.location;return r.a.createElement(E,{members:e.state.members,selectedMember:e.state.selectedMember})}}),r.a.createElement(h.b,{path:"/CreditMember",render:function(){return r.a.createElement(f,{members:e.state.members})}}),r.a.createElement(h.b,{path:"/BalanceSummary",render:function(){return r.a.createElement(w,{members:e.state.members})}}),r.a.createElement(h.b,{path:"/InvoiceOverview",render:function(){return r.a.createElement(y,{members:e.state.members})}}),r.a.createElement(h.b,{path:"/DraftInvoice",render:function(){return r.a.createElement(M,{members:e.state.members})}}),r.a.createElement(h.b,{path:"/index.html",component:D}),r.a.createElement(h.b,{component:Error})))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,null,r.a.createElement(j,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[49,1,2]]]);
//# sourceMappingURL=main.1a301f0f.chunk.js.map