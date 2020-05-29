function get_confirm()
                {
                     var hr = document.getElementById("hour").value;
                     var min = document.getElementById("min").value;
                     var sec = document.getElementById("sec").value;
                     
            
                     if(confirm("You have set an alarm for " + hr + " hrs " + min + " mins " + sec + " secs. Do you want to continue?"))
                    {
                        alert("Sure, Your alarm has been set for " + hr + " hrs " + min + " mins " + sec + " secs");
                    }
                    else
                    {
                        if(confirm("You have clicked cancel! Do you want to exit or reset the Alarm?"))
                        {
                            location.reload();
                            alert("You have exited from previous alarm. If you want, you can now set another alarm")
                        }
                        
                        else
                        {
                            alert("Your alarm is not being canceled and has been set for " + hr + " hrs " + min + " mins " + sec + " secs");
                        }
                    }
                }
                
                
                
                function  timer()
                {
                     var hr = document.getElementById("hour").value;
                     var min = document.getElementById("min").value;
                     var sec = document.getElementById("sec").value;
                     
                            var date = new Date();
                            var chr = date.getHours();
                            var cmin = date.getMinutes();
                            var csec = date.getSeconds();
                            
                           if((chr == hr) && (cmin == min) && (csec == sec))
                            {
                                analogWrite('0','255');
                                alert("Your alarm is ringing");
                            }
                }
             