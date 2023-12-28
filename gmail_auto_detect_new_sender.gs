function moveNewSendersToLabel() {
  // Get the threads in the inbox
  var threads = GmailApp.getInboxThreads();
  
  // Specify the label to move emails
  var label = GmailApp.createLabel("new sender");
  
  // Get the previously processed email addresses
  var processedEmails = PropertiesService.getUserProperties().getProperty("processedEmails");
  processedEmails = processedEmails ? JSON.parse(processedEmails) : [];
  
  // Loop through each thread
  for (var i = 0; i < threads.length; i++) {
    var thread = threads[i];
    
    // Get the first message in the thread
    var message = thread.getMessages()[0];
    
    // Get the sender's email address
    var senderEmail = message.getFrom();
    
    // Check if the sender is new (not in the processedEmails list)
    if (processedEmails.indexOf(senderEmail) === -1) {
      // Move the entire thread to the specified label
      label.addToThread(thread);
      
      // Add the sender's email to the processedEmails list
      processedEmails.push(senderEmail);
    }
  }
  
  // Save the updated processedEmails list
  PropertiesService.getUserProperties().setProperty("processedEmails", JSON.stringify(processedEmails));
}
