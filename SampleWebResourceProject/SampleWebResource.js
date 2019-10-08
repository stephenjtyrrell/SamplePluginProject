function displayName(executionContext) {
    var formContext = executionContext.getFormContext(); // get formContext

    //read lookup value
    if (formContext.getAttribute("primarycontactid").getValue() != null && formContext.getAttribute("primarycontactid").getValue()[0].id != null) {
        var contactid = formContext.getAttribute("primarycontactid").getValue()[0].id;

        //pass entity, fields, we can use expand to get related entity fields
        Xrm.WebApi.retrieveRecord("contact", contactid, "?$select=emailaddress1").then(
            function success(result) {
                if (result != null) {
                    alert("Primary Contact Email is " + result.emailaddress1);
                }
            },
            function (error) {
                alert(error.message);

            }
        );

        formContext.getControl("primarycontactid").setDisabled(true);
        formContext.getControl("telephone1").setVisible(false);
        formContext.getControl("fax").setVisible(false);
        formContext.getControl("websiteurl").setVisible(false);
        formContext.getControl("parentaccountid").setVisible(false);
        formContext.getControl("tickersymbol").setVisible(false);
    }
}