async function loadPolicies() {

    try {

        const response = await fetch("/api/policies");

        const policies = await response.json();

        const table = document.getElementById("policyTable");

        table.innerHTML = "";

        policies.forEach(policy => {

            const row = `
                <tr>
                    <td>${policy.id}</td>
                    <td>${policy.policy_number}</td>
                    <td>${policy.customer_name}</td>
                    <td>${policy.policy_type}</td>
                    <td>₹${policy.premium}</td>
                    <td>${policy.status}</td>
                </tr>
            `;

            table.innerHTML += row;

        });

    } catch (error) {

        console.error("Error loading policies:", error);

    }

}