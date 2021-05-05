<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <h1 class="h2">Member Details</h1>
</div>
<div class="row">
    <div class="col-md-4">
        <form onsubmit="event.preventDefault(); onFormSubmission();">
        <p><strong>Please put in your ClientID to see your details.</strong></p>
        <p><strong>If you don't have a ClientID yet, please join as a member first</strong></p>
        <hr>

            <div class="form-group row">
                <label for="client_id" class="col-sm-4 col-form-label col-form-label-sm">ClientID: </label>
                <div class="col-sm-8">
                    <input type="text" name="client_id" class="form-control form-control-sm" id="client_id" placeholder="CLIENT-ID">
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
                        <th>ClientID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Balance</th>
                        <th>Payment Plan</th>
                        <th>Sector-ID</th>
                        <th>Address</th>
                        <th>Zone-ID</th>
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
