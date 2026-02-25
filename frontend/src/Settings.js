export default function Settings() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Settings</h2>

      <div className="mb-6">
        <h3 className="font-semibold">Notifications</h3>
        <label className="flex items-center justify-between mt-2">
          Push Notifications <input type="checkbox" defaultChecked />
        </label>
        <label className="flex items-center justify-between mt-2">
          Health Reminders <input type="checkbox" defaultChecked />
        </label>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold">Appearance</h3>
        <label className="flex items-center justify-between mt-2">
          Dark Mode <input type="checkbox" />
        </label>
        <label className="flex items-center justify-between mt-2">
          Language <select className="border rounded p-1">
            <option>English</option>
            <option>Hindi</option>
          </select>
        </label>
      </div>
    </div>
  );
}
