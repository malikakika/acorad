import {
  
  FaMoneyCheckAlt,
  FaUniversity,
  FaShieldAlt,
} from 'react-icons/fa';
     export const PaymentSection =() =>{
     return(<section
        className="bg-white py-20 px-6 sm:px-12 lg:px-32"
        role="region"
        aria-label="Payment and cancellation policy"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-primary-blue text-center mb-12">
            Payment & Cancellation
          </h2>

          <div className="bg-gradient-to-br from-vanilla to-white p-10 rounded-3xl shadow-xl border border-gray-200 space-y-8 text-[1.05rem] text-gray-800 transition-all">
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-primary-blue flex items-center">
                <FaMoneyCheckAlt className="mr-2 text-accent-blue text-xl" />
                Payment Method
              </h3>
              <p>
                Please pay via bank transfer and confirm at{' '}
                <a
                  href="mailto:contact@acoradacademy.com"
                  aria-label="Send a payment confirmation to Acorad by email"
                >
                  contact@acoradacademy.com
                </a>
                .
              </p>
            </div>

            {/* Bank Info */}
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-primary-blue flex items-center">
                <FaUniversity className="mr-2 text-yellow-600 text-xl" />
                Bank Account
              </h3>
              <ul className="list-none space-y-1 pl-1">
                <li>
                  🏦 <strong>Bank:</strong> BMCE Bank
                </li>
                <li>
                  🧾 <strong>Account:</strong> 011330000001210006612229
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-primary-blue flex items-center">
                <FaShieldAlt className="mr-2 text-red-500 text-xl" />
                Security Notice
              </h3>
              <p className="text-sm text-gray-600 bg-red-50 p-3 rounded-lg border border-red-200">
                ⚠️ Always verify account info before transferring. Never share
                your credentials. If in doubt, contact us.
              </p>
            </div>

            <div className="space-y-2 border-t pt-4">
              <h3 className="text-2xl font-semibold text-primary-blue">
                Cancellation Policy
              </h3>
              <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                <li>
                  ❌ 50% cancellation fee if canceled ≥ 14 days before the
                  event.
                </li>
                <li>❌ No refund if canceled less than 7 days before.</li>
                <li>✅ Participant replacements are allowed at any time.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      );
    };