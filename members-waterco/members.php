<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <h1 class="h2">Members</h1>
</div>
<div class="row">
    <div class="col-md-4">
        <form onsubmit="event.preventDefault(); onFormSubmit();">
        <p><strong>Please fill here to join as a member.</strong></p>
        <hr>

            <div class="form-group row">
                <label for="first_name" class="col-sm-4 col-form-label col-form-label-sm">First Name:</label>
                <div class="col-sm-8">
                    <input type="text" name="first_name" class="form-control form-control-sm" id="first_name" placeholder="First Name">
                </div>
            </div>
            <div class="form-group row">
                <label for="last_name" class="col-sm-4 col-form-label col-form-label-sm">Last Name:</label>
                <div class="col-sm-8">
                    <input type="text" name="last_name" class="form-control form-control-sm" id="last_name" placeholder="Last Name">
                </div>
            </div>
            <div class="form-group row">
                <label for="email" class="col-sm-4 col-form-label col-form-label-sm">Email Address:</label>
                <div class="col-sm-8">
                    <input type="email" name="email" class="form-control form-control-sm" id="email" placeholder="Email Address">
                </div>
            </div>
            <div class="form-group row">
                <label for="client_password" class="col-sm-4 col-form-label col-form-label-sm">Password:</label>
                <div class="col-sm-8">
                    <input type="text" name="client_password" class="form-control form-control-sm" id="client_password" placeholder="Password">
                </div>
            </div>
            <div class="form-group row">
                <label for="payment_plan" class="col-sm-4 col-form-label col-form-label-sm">Payment Plan</label>
                <div class="col-sm-8">
                    <select class="custom-select form-control-sm" name="payment_plan" id="payment_plan">
                        <option value = "ALL" selected>ALL</option>
                    </select>
                </div>
            </div>
            <div class="form-group row">
                <label for="client_sector_id" class="col-sm-4 col-form-label col-form-label-sm">Sector-ID</label>
                <div class="col-sm-8">
                    <select class="custom-select form-control-sm" name="client_sector_id" id="client_sector_id">
                        <option selected>----</option>
                        <option value="4">4</option>
                        <option value="14">14</option>
                        <option value="24">24</option>
                        <option value="34">34</option>
                        <option value="44">44</option>
                        <option value="54">54</option>
                        <option value="64">64</option>
                        <option value="74">74</option>
                        <option value="84">84</option>
                        <option value="94">94</option>
                        <option value="104">104</option>
                        <option value="114">114</option>
                    </select>
                   
                </div>
            </div>
            <div class="form-group row">
                <label for="client_address" class="col-sm-4 col-form-label col-form-label-sm">Address</label>
                <div class="col-sm-8">
                    <select class="custom-select form-control-sm" name="client_address" id="client_address">
                        <option selected>----</option>
                        <option value="kimironko">Kimironko</option>
                        <option value="remera">Remera</option>
                        <option value="kanombe">Kanombe</option>
                        <option value="kabeza">Kabeza</option>
                        <option value="kisimenti">Kisimenti</option>
                        <option value="gishushu">Gishushu</option>
                        <option value="kacyiru">Kacyiru</option>
                        <option value="gisozi">Gisozi</option>
                        <option value="kicyukiru">Kicyukiru</option>
                        <option value="nyarutarama">Nyarutarama</option>
                        <option value="nyamirambo">Nyamirambo</option>
                        <option value="kagugu">Kagugu</option>
                    </select>
                </div>
            </div>
            <div class="form-group row">
                <label for="client_zone_id" class="col-sm-4 col-form-label col-form-label-sm">Zone-ID</label>
                <div class="col-sm-8">
                    <select class="custom-select form-control-sm" name="client_zone_id" id="client_zone_id">
                        <option selected>----</option>
                        <option value="4">4</option>
                        <option value="14">14</option>
                        <option value="24">24</option>
                        <option value="34">34</option>
                        <option value="44">44</option>
                        <option value="54">54</option>
                        <option value="64">64</option>
                        <option value="74">74</option>
                        <option value="84">84</option>
                        <option value="94">94</option>
                        <option value="104">104</option>
                        <option value="114">114</option>
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
            <p><strong>Please Note Down your ClientID, you will use this to perform operations</strong></p>
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
