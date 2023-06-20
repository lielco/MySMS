require 'twilio-ruby'

class SmsHandler
    def initialize
        account_sid = Rails.configuration.x.sms.twilio.account_sid
        auth_token = ''
        @client = Twilio::REST::Client.new(account_sid, auth_token)
    end

    def send_sms(to:string, body: string)
        from = Rails.configuration.x.sms.sender_number
        
        message = @client.messages.create(
        from: from,
        to: to,
        body: body
        )

        puts message.sid
    end
end