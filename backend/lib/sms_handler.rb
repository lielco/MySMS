require 'twilio-ruby'

# Class for handling SMS messages 3rd party communication
class SmsHandler
    def initialize
        account_sid = Rails.configuration.x.sms.twilio_account_sid
        auth_token = Rails.configuration.x.sms.twilio_auth_token
        @client = Twilio::REST::Client.new(account_sid, auth_token)
    end

    # Sends SMS using Twilio
    # Parameters: 
    #   to - The US phone number to send to (e.g. +11111111111)
    #   body - SMS to send
    def send_sms(to:string, body: string)
        from = Rails.configuration.x.sms.twilio_sender_number
        
        message = @client.messages.create(
        from: from,
        to: to,
        body: body
        )
    end
end