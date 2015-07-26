/**
 * Created by DELL on 22-07-2015.
 */

function LogOutUser()
{
    localStorage.clear();
    setLoginDiv();
}

function PerformDefaultActions()
{
    setHeight();
    setLoginDiv();

}

function setLoginDiv()
{
    if (localStorage.getItem('email') != null)
    {
        document.getElementById('aLogin').style.display = 'none';
        document.getElementById('aLogin').style.visibility = 'hidden';

        document.getElementById('loginDetail').style.display = 'inline';
        document.getElementById('loginDetail').style.visibility = 'visible';

        document.getElementById('loginDetail').innerHTML = '<small><a href="profilesetting.html" style="text-decoration: none; cursor: pointer; color: #000000;">' + 'Owner Profile' + '</a>' + ' &nbsp;&nbsp;&nbsp;&nbsp;<a href="#" onclick="LogOutUser();" style="color: #000000;"><i class="glyphicon glyphicon-log-out"> </i>&nbsp;Logout</a></small>';
    }
    else
    {
        document.getElementById('aLogin').style.display = 'inline';
        document.getElementById('aLogin').style.visibility = 'visible';

        document.getElementById('loginDetail').style.display = 'none';
        document.getElementById('loginDetail').style.visibility = 'hidden';
    }
}

function setHeight() {
    var ht = screen.height / 3.46;
    document.getElementById('divBlack').style.height = ht + 'px';
    document.getElementById('divRed').style.height = ht + 'px';
    document.getElementById('divBrown').style.height = ht + 'px';
}

function StoreLoginInfo()
{
    localStorage.setItem('loggedIn','true');
    localStorage.setItem('email',document.getElementById('inEmail').value)
}

function ShowDiv(divID) {
    if (divID == 'divReservationList') {
        document.getElementById('divReservationList').setAttribute('class', 'show');
        document.getElementById('liReservationList').setAttribute('class', 'active');
    }
    else {
        document.getElementById('divReservationList').setAttribute('class', 'hideInline');
        document.getElementById('liReservationList').setAttribute('class', 'inactive-tab');
    }

    if (divID == 'divSeatingArea') {
        document.getElementById('divSeatingArea').setAttribute('class', 'show');
        document.getElementById('liSeatingArea').setAttribute('class', 'active');
    }
    else {
        document.getElementById('divSeatingArea').setAttribute('class', 'hideInline');
        document.getElementById('liSeatingArea').setAttribute('class', 'inactive-tab');
    }

    if (divID == 'divProfile') {
        document.getElementById('divProfile').setAttribute('class', 'show');
        document.getElementById('liProfile').setAttribute('class', 'active');
    }
    else {
        document.getElementById('divProfile').setAttribute('class', 'hideInline');
        document.getElementById('liProfile').setAttribute('class', 'inactive-tab');
    }
}

function ShowConfirmation(show)
{
    var ccode = document.getElementById('divCCode');
    var cmessage = document.getElementById('divCMessage');
    var cbutton = document.getElementById('btnConfirm');

    if (show == 'showCode')
    {
        ccode.style.visibility = 'visible';
        ccode.style.display = 'inline';
        cbutton.style.display = 'none';
        cbutton.style.visibility = 'hidden'
    }
    else
    {
        ccode.style.visibility = 'hidden';
        ccode.style.display = 'none';
    }

    if (show == 'showMessage')
    {
        cmessage.style.visibility = 'visible';
        cmessage.style.display = 'inline';
        cbutton.style.display = 'inline';
        cbutton.style.visibility = 'visible'
    }
    else
    {
        cmessage.style.visibility = 'hidden';
        cmessage.style.display = 'none';
    }
}

