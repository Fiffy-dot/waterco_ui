<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <h1 class="h2">Capture Payment</h1>
</div>
<div class="row">
    <div class="col-md-4">
        <form onsubmit="event.preventDefault(); onFormClick();">
        <p><strong>Please put in the following to capture payment.</strong></p>
        <p><strong>If you don't have a ClientID yet, please join as a member first</strong></p>
        <hr>

            <div class="form-group row">
                <label for="payment_client_id" class="col-sm-4 col-form-label col-form-label-sm">ClientID: </label>
                <div class="col-sm-8">
                    <input type="text" name="payment_client_id" class="form-control form-control-sm" id="payment_client_id" placeholder="Client-ID">
                </div>
            </div>
            <div class="form-group row">
                <label for="payment" class="col-sm-4 col-form-label col-form-label-sm">Payment: </label>
                <div class="col-sm-8">
                    <input type="text" name="payment" class="form-control form-control-sm" id="payment" placeholder="Payment in Numbers eg: 500">
                </div>
            </div>
            <div class="form-group row">
                <label for="payment_date" class="col-sm-4 col-form-label col-form-label-sm">Payment Date: </label>
                <div class="col-sm-8">
                    <input type="date" name="payment_date" class="form-control form-control-sm" id="payment_date" placeholder="Payment Date">
                </div>
            </div>
            <div class="form-group row">
                <label for="payment_premise_id" class="col-sm-4 col-form-label col-form-label-sm">Premise</label>
                <div class="col-sm-8">
                    <select class="custom-select form-control-sm" name="payment_premise_id" id="payment_premise_id">
                        <option selected>Choose Premise Id</option>
                        <option value="14">14</option>
                        <option value="154">154</option>
                        <option value="174">174</option>
                        <option value="214">214</option>
                        <option value="224">224</option>
                        <option value="234">234</option>
                        <option value="244">244</option>

                    </select>
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
                        <th>Payment</th>
                        <th>Payment Date</th>
                        <th>PremiseID</th>
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
