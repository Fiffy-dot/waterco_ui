<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <h1 class="h2">View Bill</h1>
</div>
<div class="row">
    <div class="col-md-4">
        <form onsubmit="event.preventDefault(); onFormEntry();">
        <p><strong>Please put in the following to see your bill.</strong></p>
        <p><strong>If you don't have a ClientID yet, please join as a member first</strong></p>
        <p><em>If you are just a new member, your details will not show up as your bills have not been captured in our system yet.A Bill-ID is assigned to you when it happens and you use it to track your bills.</em></p>
        <hr>

            <div class="form-group row">
                <label for="bill_id" class="col-sm-4 col-form-label col-form-label-sm">bill_id: </label>
                <div class="col-sm-8">
                    <input type="text" name="bill_id" class="form-control form-control-sm" id="bill_id" placeholder="BILL">
                </div>
            </div>
        
            <div class="form-group row">
                <div class="col-sm-8">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </div>
        </form>
    </div>
    <div class="col-md-8">
        <div class="table-responsive">
            <p><em>Your details will appear here : </em></p>
            <table class="table table-striped table-sm" id="memberslist">
                <thead>
                    <tr>
                        <th>BillID</th>
                        <th>Balance</th>
                        <th>ClientID</th>
                        <th>StaffID</th>
                        <th>&nbsp;</th>

                    </tr>
                </thead>
                <tbody>
                    <!-- Records Go In Here -->
                </tbody>
            </table>
        </div>
    </div>
</div>

</div>
